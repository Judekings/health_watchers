import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const refreshSchema = z.object({
  refreshToken: z.string(),
});

export const mfaVerifySchema = z.object({
  totp: z.string().length(6),
});

export const mfaChallengeSchema = z.object({
  tempToken: z.string(),
  totp: z.string().length(6),
});

export type LoginDto = z.infer<typeof loginSchema>;
export type RefreshDto = z.infer<typeof refreshSchema>;
export type MfaVerifyDto = z.infer<typeof mfaVerifySchema>;
export type MfaChallengeDto = z.infer<typeof mfaChallengeSchema>;

// Type for login request
export interface LoginReq {
  body: LoginDto;
}

// Type for refresh request
export interface RefreshReq {
  body: RefreshDto;
}
