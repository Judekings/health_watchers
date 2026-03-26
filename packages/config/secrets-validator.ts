/**
 * Validates that all required environment variables are set.
 * Exits with code 1 if any are missing.
 */
const REQUIRED_VARS = [
  'MONGO_URI',
  'JWT_ACCESS_TOKEN_SECRET',
  'JWT_REFRESH_TOKEN_SECRET',
  'STELLAR_PLATFORM_PUBLIC_KEY',
  'FIELD_ENCRYPTION_KEY',
] as const;

export function validateStartupSecrets(): void {
  const missing = REQUIRED_VARS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    console.error(`❌ Missing required environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }
}

export function logSecretsStatus(): void {
  for (const key of REQUIRED_VARS) {
    const set = Boolean(process.env[key]);
    console.log(`  ${set ? '✅' : '❌'} ${key}`);
  }
}
