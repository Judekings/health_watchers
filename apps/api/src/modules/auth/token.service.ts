import jwt from 'jsonwebtoken';
import { AppRole } from '@api/types/express';

const ACCESS_SECRET  = process.env.JWT_ACCESS_TOKEN_SECRET  || 'access-secret';
const REFRESH_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET || 'refresh-secret';
const TEMP_SECRET    = process.env.JWT_TEMP_TOKEN_SECRET    || 'temp-secret';

interface TokenPayload { userId: string; role: AppRole; clinicId: string; }

export const signAccessToken  = (p: TokenPayload) => jwt.sign(p, ACCESS_SECRET,  { expiresIn: '15m' });
export const signRefreshToken = (p: TokenPayload) => jwt.sign(p, REFRESH_SECRET, { expiresIn: '7d'  });
export const signTempToken    = (userId: string)  => jwt.sign({ userId }, TEMP_SECRET, { expiresIn: '5m' });

export function verifyRefreshToken(token: string): TokenPayload | null {
  try { return jwt.verify(token, REFRESH_SECRET) as TokenPayload; }
  catch { return null; }
}

export function verifyTempToken(token: string): string | null {
  try {
    const decoded = jwt.verify(token, TEMP_SECRET) as { userId: string };
    return decoded.userId;
  } catch { return null; }
}
