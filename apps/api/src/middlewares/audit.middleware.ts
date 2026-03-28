import { Request, Response, NextFunction } from 'express';
import { AuditLogModel, AuditAction, AuditResourceType } from '../modules/audit/audit-log.model';
import logger from '../utils/logger';

const METHOD_ACTION: Record<string, AuditAction> = {
  GET:    'READ',
  POST:   'CREATE',
  PUT:    'UPDATE',
  PATCH:  'UPDATE',
  DELETE: 'DELETE',
};

/**
 * Returns an Express middleware that logs PHI access after a successful response.
 * @param resourceType - The type of resource being accessed (Patient | Encounter | Payment)
 */
export function auditLog(resourceType: AuditResourceType) {
  return (req: Request, res: Response, next: NextFunction): void => {
    res.on('finish', () => {
      // Only log successful responses (2xx) for authenticated users
      if (res.statusCode < 200 || res.statusCode >= 300 || !req.user) return;

      const action = METHOD_ACTION[req.method] ?? 'READ';
      const resourceId = req.params.id || req.params.patientId || 'collection';

      AuditLogModel.create({
        userId:       req.user.userId,
        clinicId:     req.user.clinicId,
        action,
        resourceType,
        resourceId,
        ipAddress:    (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown',
        userAgent:    req.headers['user-agent'] || 'unknown',
      }).catch((err) => logger.error({ err }, 'Failed to write audit log'));
    });

    next();
  };
}
