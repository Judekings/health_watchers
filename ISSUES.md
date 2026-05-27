# Health Watchers – Production Readiness Issues

> **102 issues** across Backend, Frontend, Infrastructure, Security & Compliance, and Design.  
> Each issue includes: **Label** · **Branch** · **Timeframe** · Description · Tasks · Acceptance Criteria

---

## Quick Reference

| # | Label | Title | Branch | Time |
|---|-------|-------|--------|------|
| #1 | 🐛 | Stub routes override real controller implementations | `fix/wire-controller-routes` | 1 day |
| #2 | 🐛 | `connectDB()` is never called — app starts without a databas… | `fix/connect-db-on-startup` | 2 hours |
| #3 | 🐛 | `config` object missing `jwt` and `stellar` namespaces — run… | `fix/config-jwt-stellar-namespaces` | 3 hours |
| #4 | ✨ | No global error handler — unhandled async errors crash or ha… | `fix/global-error-handler` | 1 day |
| #5 | ✨ | No `POST /auth/register` implementation | `feat/auth-register-endpoint` | 2 days |
| #6 | ✨ | No refresh token rotation or revocation — stolen tokens vali… | `feat/refresh-token-rotation` | 3 days |
| #7 | 🐛 | Duplicate and conflicting patient model files | `fix/remove-duplicate-patient-model` | 3 hours |
| #8 | ✨ | `systemId` not auto-generated — required field left to calle… | `feat/auto-generate-system-id` | 1 day |
| #9 | 🐛 | All async route handlers missing try/catch — DB errors cause… | `fix/async-handler-all-routes` | 1 day |
| #10 | ✨ | No input validation on encounter and payment routes | `feat/validate-encounter-payment-input` | 1 day |
| #11 | ✨ | CORS not configured — web app blocked by browsers in all non… | `feat/cors-configuration` | 3 hours |
| #12 | 🔒 | No rate limiting — login endpoint vulnerable to brute-force … | `feat/rate-limiting` | 1 day |
| #13 | 🔒 | No `helmet` security headers — API exposes sensitive server … | `feat/helmet-security-headers` | 2 hours |
| #14 | 🔒 | Stellar service accepts private key in HTTP request body — c… | `fix/remove-secret-from-request-body` | 1 day |
| #15 | 🔒 | Stellar service has no authentication — publicly accessible … | `feat/stellar-service-auth` | 1 day |
| #16 | ✨ | No pagination on list endpoints — unbounded DB queries | `feat/pagination-list-endpoints` | 2 days |
| #17 | 🔒 | MongoDB `$regex` search is unindexed and vulnerable to ReDoS | `fix/patient-search-text-index` | 1 day |
| #18 | ✨ | No update or delete endpoints for patients or encounters | `feat/patient-encounter-update-delete` | 3 days |
| #19 | ✨ | No Clinic model — `clinicId` references a non-existent colle… | `feat/clinic-model-and-routes` | 3 days |
| #20 | ✨ | No structured logging — `console.log` throughout production … | `feat/structured-logging-pino` | 1 day |
| #21 | ✨ | No graceful shutdown — in-flight requests dropped on process… | `feat/graceful-shutdown` | 1 day |
| #22 | 🐛 | `packages/config/index.ts` resolves `.env` path relative to … | `fix/config-dotenv-entry-point` | 3 hours |
| #23 | ✨ | No payment confirmation flow — payment records stuck in `pen… | `feat/payment-confirmation-flow` | 3 days |
| #24 | 🔒 | No NoSQL injection sanitization | `feat/nosql-injection-sanitization` | 3 hours |
| #25 | 🔒 | No request body size limit — potential DoS via large payload… | `feat/request-body-size-limit` | 3 hours |
| #26 | ✨ | `EncounterModel` missing critical clinical fields | `feat/encounter-clinical-fields` | 2 days |
| #27 | ✨ | No `GET /api/v1/encounters` list endpoint | `feat/encounters-list-endpoint` | 1 day |
| #28 | ✨ | No `GET /api/v1/payments` list endpoint | `feat/payments-list-endpoint` | 1 day |
| #29 | ✨ | No environment variable validation on startup | `feat/env-validation-on-startup` | 1 day |
| #30 | ✨ | No OpenAPI / Swagger documentation — no API contract for fro… | `feat/openapi-swagger-docs` | 3 days |
| #31 | 🔒 | Patient data returned without field filtering — internal fie… | `fix/patient-response-field-filtering` | 1 day |
| #32 | 🐛 | `zod` missing from `apps/api` dependencies | `fix/add-zod-to-api-deps` | 1 hour |
| #33 | 🐛 | `packages/types/index.ts` and `packages/types/src/index.ts` … | `fix/types-package-entry-point` | 3 hours |
| #34 | ✨ | No AI implementation — `POST /ai/summarize` returns 501 | `feat/ai-summarize-gemini` | 3 days |
| #35 | ✨ | No WebSocket / real-time updates | `feat/websocket-realtime-updates` | 5 days |
| #36 | 🔒 | No Stellar mainnet safety checks | `feat/stellar-mainnet-safety-checks` | 1 day |
| #37 | ✨ | No multi-currency support — only XLM payments | `feat/multi-currency-stellar-payments` | 2 days |
| #38 | ✨ | No patient appointment / scheduling module | `feat/appointment-scheduling-module` | 5 days |
| #39 | ✨ | No email notification system | `feat/email-notification-system` | 5 days |
| #40 | ✨ | No image or file upload support for patient documents | `feat/document-file-upload-s3` | 5 days |
| #41 | ✨ | No request ID / correlation ID for distributed tracing | `feat/request-correlation-id` | 1 day |
| #42 | ✨ | No database connection pooling configuration | `feat/mongo-connection-pool-config` | 3 hours |
| #43 | ✨ | No data export / patient data portability | `feat/patient-data-export-hipaa` | 3 days |
| #44 | 🐛 | API base URL hardcoded as `http://localhost:3001` in every p… | `fix/api-base-url-env-var` | 3 hours |
| #45 | ✨ | No authentication in the web app — all pages are publicly ac… | `feat/web-authentication-flow` | 5 days |
| #46 | 🐛 | Patient list page maps `patient.name` but API returns `first… | `fix/patient-interface-field-mapping` | 3 hours |
| #47 | ✨ | No error boundary or meaningful error UI in web pages | `feat/error-boundary-ui` | 1 day |
| #48 | ✨ | No form to create patients, encounters, or payments in the U… | `feat/create-forms-patients-encounters` | 5 days |
| #49 | 🐛 | Navigation uses `<a>` tags — causes full page reloads | `fix/replace-anchor-with-next-link` | 2 hours |
| #50 | 🐛 | Payments page links to testnet explorer unconditionally | `fix/stellar-explorer-url-by-network` | 2 hours |
| #51 | ✨ | No global state management or API data caching | `feat/tanstack-query-integration` | 2 days |
| #52 | ✨ | No search UI for patients and no patient detail page | `feat/patient-search-ui-detail-page` | 3 days |
| #53 | 🔒 | No Content-Security-Policy on the Next.js web app | `feat/csp-headers-nextjs` | 1 day |
| #54 | 🐛 | No `robots.txt` or `sitemap.xml` for the web app | `fix/robots-txt-noindex` | 2 hours |
| #55 | ✨ | No internationalisation (i18n) support | `feat/i18n-internationalisation` | 3 days |
| #56 | ✨ | No accessibility (a11y) compliance | `feat/accessibility-a11y-compliance` | 3 days |
| #57 | ✨ | No mobile responsiveness | `feat/mobile-responsive-layout` | 3 days |
| #58 | ✨ | No test suite — zero test coverage across the entire codebas… | `feat/test-suite-setup` | 5 days |
| #59 | ✨ | CI pipeline has no test step and only runs on `main` | `feat/ci-test-step-all-branches` | 1 day |
| #60 | ✨ | No Docker / containerization — no reproducible deployment en… | `feat/docker-containerization` | 3 days |
| #61 | ✨ | No secrets management — secrets only in `.env` files | `feat/secrets-management-policy` | 2 days |
| #62 | 🔧 | `.gitignore` is minimal — build artifacts and sensitive file… | `fix/expand-gitignore` | 2 hours |
| #63 | ✨ | No database seeding script for development | `feat/database-seed-script` | 1 day |
| #64 | ✨ | No database backup strategy documented | `feat/database-backup-strategy` | 2 days |
| #65 | 🔧 | `turbo` and `typescript` pinned to `latest` — non-determinis… | `fix/pin-dependency-versions` | 3 hours |
| #66 | 🔧 | No `.nvmrc` or Node.js version enforcement | `fix/nvmrc-node-version-enforcement` | 2 hours |
| #67 | 🔧 | No ESLint configuration — linting is effectively disabled | `feat/eslint-configuration` | 1 day |
| #68 | 🔧 | No Prettier configuration — inconsistent code formatting | `feat/prettier-precommit-hooks` | 3 hours |
| #69 | 🔧 | No `pre-commit` hooks — broken code can be committed | `feat/precommit-hooks-husky` | 3 hours |
| #70 | 🔧 | No `CODEOWNERS` file — no automatic PR review assignment | `feat/codeowners-pr-template` | 3 hours |
| #71 | 🔧 | No `dependabot` configuration — dependencies never automatic… | `feat/dependabot-configuration` | 2 hours |
| #72 | 🔧 | Turbo `test` task missing from `turbo.json` | `fix/turbo-test-task` | 2 hours |
| #73 | 🔧 | No `package.json` `description` or `repository` fields | `fix/package-json-metadata-license` | 2 hours |
| #74 | 🔧 | No `tsconfig` path aliases — long relative imports throughou… | `feat/tsconfig-path-aliases` | 3 hours |
| #75 | ✨ | No monitoring or alerting setup | `feat/monitoring-sentry-integration` | 2 days |
| #76 | ✨ | No performance testing or load testing | `feat/load-performance-testing` | 3 days |
| #77 | 📄 | No `CONTRIBUTING.md` — no onboarding guide for new developer… | `docs/contributing-guide` | 1 day |
| #78 | 📄 | No `SECURITY.md` — no security policy or vulnerability repor… | `docs/security-policy` | 1 day |
| #79 | 📄 | No `DEPLOYMENT.md` — no production deployment guide | `docs/deployment-guide` | 2 days |
| #80 | 📄 | No `CHANGELOG.md` or versioning strategy | `docs/changelog-versioning-strategy` | 1 day |
| #81 | 📄 | No `README` badges or project status indicators | `fix/readme-badges-cleanup` | 3 hours |
| #82 | 🔒 | No HIPAA audit logging for PHI access | `feat/hipaa-audit-logging` | 5 days |
| #83 | 🔒 | JWT tokens not validated for `iss` or `aud` claims | `fix/jwt-iss-aud-claims` | 3 hours |
| #84 | 🔒 | No account lockout after repeated failed login attempts | `feat/account-lockout-brute-force` | 2 days |
| #85 | 🐛 | `node-fetch` v3 is ESM-only but project uses CommonJS — impo… | `fix/remove-node-fetch-use-native` | 3 hours |
| #86 | 🐛 | Stellar `networkPassphrase` hardcoded as string literals | `fix/stellar-network-passphrase-const` | 2 hours |
| #87 | 🔒 | No data encryption at rest for sensitive patient fields | `feat/field-level-encryption-phi` | 5 days |
| #88 | 🔒 | No input sanitization for XSS in stored text fields | `feat/xss-input-sanitization` | 1 day |
| #89 | 🔒 | No password complexity enforcement beyond minimum length | `feat/password-complexity-enforcement` | 1 day |
| #90 | 🔒 | No multi-factor authentication (MFA) | `feat/mfa-totp-authentication` | 5 days |
| #91 | 🎨 | Define the global design system — color palette, typography,… | `design/global-design-system` | 2 days |
| #92 | 🎨 | Design the reusable UI component library | `design/ui-component-library` | 3 days |
| #93 | 🎨 | Design the navigation layout and sidebar structure | `design/navigation-layout` | 1 day |
| #94 | 🎨 | Design the authentication screens — login and password reset | `design/auth-screens` | 1 day |
| #95 | 🎨 | Design the Dashboard / Home page | `design/dashboard-home` | 2 days |
| #96 | 🎨 | Design the Patients module — list, search, detail, and creat… | `design/patients-module` | 3 days |
| #97 | 🎨 | Design the Encounters module — list, detail, and log encount… | `design/encounters-module` | 2 days |
| #98 | 🎨 | Design the Payments module — list, intent creation, and conf… | `design/payments-module` | 2 days |
| #99 | 🎨 | Design the user settings and profile page | `design/settings-profile-page` | 1 day |
| #100 | 🎨 | Design the empty states, loading skeletons, and error screen… | `design/empty-loading-error-states` | 1 day |
| #101 | 🎨 | Design the responsive mobile layout | `design/responsive-mobile-layout` | 2 days |
| #102 | 🎨 | Inline styles used throughout — no design system or CSS | `design/tailwind-design-system-impl` | 3 days |

---

## BACKEND / API

---

### #1 Stub routes override real controller implementations

**Label:** 🐛 bug  
**Branch:** `fix/wire-controller-routes`  
**Timeframe:** 1 day

**Description:**
`encounters.controller.ts` passes `req.body` directly to `EncounterModel.create()` with no Zod validation. `payments.controller.ts` only destructures `amount` from `req.body` with no type or range checks. Missing required fields (e.g. `patientId`, `chiefComplaint`) will either cause a Mongoose validation error (unhandled, see Issue #9) or silently create incomplete records.

**Tasks:**
- Create `apps/api/src/modules/encounters/encounter.validation.ts` with a Zod schema requiring `patientId` (valid ObjectId string), `chiefComplaint` (min 3 chars), optional `notes` (max 5000 chars)
- Create `apps/api/src/modules/payments/payments.validation.ts` with a Zod schema requiring `amount` (positive numeric string), `patientId`
- Apply `validateRequest({ body: schema })` middleware to all POST/PATCH routes in both modules
- Validate `:id` and `:patientId` path params as valid MongoDB ObjectId strings

**Acceptance Criteria:**
- `POST /encounters` with missing `chiefComplaint` returns `400` with a Zod issues array
- `POST /payments/intent` with `amount: -5` returns `400`
- `GET /encounters/not-a-valid-id` returns `400`, not a Mongoose CastError 500
- All validation schemas are exported from their respective validation files and tested

---

### #2 `connectDB()` is never called — app starts without a database connection

**Label:** 🐛 bug  
**Branch:** `fix/connect-db-on-startup`  
**Timeframe:** 2 hours

**Description:**
`apps/api/src/config/db.ts` exports a `connectDB()` function that establishes the Mongoose connection to MongoDB. However, `app.ts` never imports or calls this function. The Express server starts and accepts requests, but every database operation (login, create patient, etc.) throws a Mongoose "not connected" error. This is a silent startup bug — the server appears healthy but is completely non-functional.

**Tasks:**
- Import `connectDB` in `app.ts`
- Call `await connectDB()` before `app.listen()`
- Wrap the startup sequence in an async IIFE or `main()` function
- Add a startup log confirming DB connection before the server begins accepting requests

**Acceptance Criteria:**
- Running `npm run dev` logs `✅ MongoDB Connected` before `API running on port ...`
- `POST /api/v1/auth/login` successfully queries the users collection
- If `MONGO_URI` is invalid, the process exits with a non-zero code and a clear error message
- No Mongoose "not connected" errors appear during normal operation

---

### #3 `config` object missing `jwt` and `stellar` namespaces — runtime crash on startup

**Label:** 🐛 bug  
**Branch:** `fix/config-jwt-stellar-namespaces`  
**Timeframe:** 3 hours

**Description:**
`packages/config/index.ts` exports a flat config object with a `jwtSecret` key. However, `token.service.ts` accesses `config.jwt.accessTokenSecret` and `config.jwt.refreshTokenSecret`, and `payments.controller.ts` accesses `config.stellar.platformPublicKey` and `config.stellar.network`. Both of these will throw `TypeError: Cannot read properties of undefined` the moment any auth or payment route is hit, because `config.jwt` and `config.stellar` are `undefined`.

**Tasks:**
- Restructure `packages/config/index.ts` to export nested namespaces:
  ```ts
  jwt: { accessTokenSecret: string, refreshTokenSecret: string }
  stellar: { network: string, horizonUrl: string, platformPublicKey: string, secretKey: string }
  ```
- Add `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, and `STELLAR_PLATFORM_PUBLIC_KEY` to `.env.example`
- Update all consumers (`token.service.ts`, `payments.controller.ts`, `stellar-service`) to use the new structure
- Add startup validation that throws if any required key is an empty string

**Acceptance Criteria:**
- `config.jwt.accessTokenSecret` and `config.jwt.refreshTokenSecret` resolve to non-empty strings at runtime
- `config.stellar.platformPublicKey` resolves correctly
- Starting the app with missing env vars prints a descriptive error and exits with code 1
- All existing usages of `config.jwtSecret` are removed

---

### #4 No global error handler — unhandled async errors crash or hang requests

**Label:** ✨ feature  
**Branch:** `fix/global-error-handler`  
**Timeframe:** 1 day

**Description:**
`app.ts` registers no Express error-handling middleware (the 4-argument `(err, req, res, next)` form). Every async route handler in `encounters.controller.ts` and `patients.controller.ts` has no try/catch. When Mongoose throws (e.g. duplicate key, validation error, network timeout), the error propagates as an unhandled promise rejection. In Node.js this either crashes the process or, in newer versions, leaves the request hanging indefinitely with no response sent to the client.

**Tasks:**
- Create `apps/api/src/middlewares/error.middleware.ts` with a typed Express error handler
- The handler must distinguish between operational errors (Mongoose `ValidationError`, `CastError`, JWT errors) and unexpected errors
- Return structured JSON: `{ error: string, message: string, ...(dev ? { stack } : {}) }`
- Register it as the last `app.use()` in `app.ts`
- Create an `asyncHandler` wrapper utility and apply it to all async route handlers
- Add handling for `404` routes (unmatched paths)

**Acceptance Criteria:**
- A Mongoose validation error on `POST /patients` returns `400` with a JSON body, not a hanging request
- An unexpected error returns `500` with `{ error: 'InternalServerError' }` — no stack trace in production
- Stack traces are included in development (`NODE_ENV=development`) only
- Unmatched routes return `404 { error: 'NotFound' }`
- No `UnhandledPromiseRejection` warnings appear in logs during normal error scenarios

---

### #5 No `POST /auth/register` implementation

**Label:** ✨ feature  
**Branch:** `feat/auth-register-endpoint`  
**Timeframe:** 2 days

**Description:**
The stub router has a `/register` route returning 501. The real `auth.controller.ts` only implements `/login` and `/refresh`. There is no way to create user accounts in the system. This means the application cannot be bootstrapped — even a super admin cannot be created through the API. The `UserModel` exists with all required fields but is never written to via any endpoint.

**Tasks:**
- Implement `POST /api/v1/auth/register` in `auth.controller.ts`
- Accept `{ fullName, email, password, role, clinicId }` in the request body
- Validate with a new `registerSchema` Zod schema (password min 8 chars, valid role enum, valid email)
- Check for duplicate email and return `409 Conflict` if found
- Hash password via bcrypt (salt rounds: 12) — do not rely solely on the pre-save hook for this endpoint
- Return `201` with `{ accessToken, refreshToken }` on success
- Protect the route so only `SUPER_ADMIN` can create `CLINIC_ADMIN` accounts; `CLINIC_ADMIN` can create `DOCTOR`/`NURSE`/`ASSISTANT`

**Acceptance Criteria:**
- `POST /auth/register` with valid body returns `201` and both tokens
- Duplicate email returns `409 { error: 'Conflict', message: 'Email already in use' }`
- Weak password returns `400` with Zod validation issues
- Password is stored as a bcrypt hash, never plaintext
- A `DOCTOR` cannot register a `SUPER_ADMIN` account (returns `403`)

---

### #6 No refresh token rotation or revocation — stolen tokens valid for 7 days

**Label:** ✨ feature  
**Branch:** `feat/refresh-token-rotation`  
**Timeframe:** 3 days

**Description:**
Refresh tokens are stateless JWTs signed with a secret. Once issued, they cannot be invalidated before their 7-day expiry. If a refresh token is stolen (e.g. via XSS, log exposure, or a compromised device), an attacker can silently obtain new access tokens for 7 days with no way to stop them. There is also no logout endpoint to invalidate tokens server-side.

**Tasks:**
- Add a `refreshTokenHash` field to `UserModel` (hashed with SHA-256, not bcrypt, for speed)
- On `POST /auth/refresh`: verify the incoming token, check its hash matches the stored one, issue a new access token AND a new refresh token, store the new hash, invalidate the old one
- Implement `POST /api/v1/auth/logout` that clears `refreshTokenHash` from the user document
- On login, store the new refresh token hash
- If a refresh token is reused after rotation (hash mismatch), treat it as a token theft: clear all tokens and return `401`

**Acceptance Criteria:**
- After `POST /auth/logout`, using the old refresh token returns `401`
- After `POST /auth/refresh`, the old refresh token is rejected on a second use
- Reuse of a rotated refresh token clears the stored hash and returns `401`
- `UserModel` has a `refreshTokenHash` field that is `select: false`
- Logout endpoint returns `200 { status: 'success' }`

---

### #7 Duplicate and conflicting patient model files

**Label:** 🐛 bug  
**Branch:** `fix/remove-duplicate-patient-model`  
**Timeframe:** 3 hours

**Description:**
Two patient model files exist: `apps/api/src/modules/patients/patient.model.ts` (old, uses `gender: 'male'|'female'|'other'`, no `systemId`) and `apps/api/src/modules/patients/models/patient.model.ts` (new, uses `sex: 'M'|'F'|'O'`, has `systemId`, `searchName`). `patients.controller.ts` imports the old model. The validation schema in `patients.validation.ts` uses `sex` (matching the new model). This mismatch means create-patient requests will fail Mongoose validation because the old model doesn't have `sex` or `systemId`.

**Tasks:**
- Delete `apps/api/src/modules/patients/patient.model.ts` (the old file)
- Update `patients.controller.ts` to import from `./models/patient.model`
- Ensure the `PatientModel` export name is consistent
- Audit all other files that may import the old model path

**Acceptance Criteria:**
- Only one patient model file exists in the codebase
- `POST /api/v1/patients` with `{ firstName, lastName, dateOfBirth, sex, contactNumber, address }` creates a record successfully
- No TypeScript errors related to `gender` vs `sex` field mismatch
- `npm run build` completes without errors

---

### #8 `systemId` not auto-generated — required field left to caller

**Label:** ✨ feature  
**Branch:** `feat/auto-generate-system-id`  
**Timeframe:** 1 day

**Description:**
`models/patient.model.ts` marks `systemId` as `required: true` and `unique: true`. The controller does `PatientModel.create({ ...req.body, clinicId })`, meaning the caller must supply `systemId`. This is wrong — patient IDs must be system-generated, sequential, and clinic-scoped to prevent collisions and ensure auditability. Allowing clients to set their own `systemId` is a data integrity and security risk.

**Tasks:**
- Before creating a patient, use `PatientCounterModel` to atomically increment and retrieve the next counter value for the given `clinicId`
- Format `systemId` as `HW-{clinicId_short}-{paddedNumber}` (e.g. `HW-ABC123-001042`)
- Use `findOneAndUpdate` with `upsert: true` and `$inc` for atomic counter increment
- Strip `systemId` from `req.body` before passing to `PatientModel.create()`
- Also auto-generate `searchName` as `${lastName.toLowerCase()} ${firstName.toLowerCase()}`

**Acceptance Criteria:**
- `POST /api/v1/patients` never requires `systemId` in the request body
- Two concurrent patient creation requests never produce the same `systemId`
- `systemId` follows the defined format and is unique across the collection
- `searchName` is automatically set and kept in sync on updates

---

### #9 All async route handlers missing try/catch — DB errors cause unhandled rejections

**Label:** 🐛 bug  
**Branch:** `fix/async-handler-all-routes`  
**Timeframe:** 1 day

**Description:**
`patients.controller.ts`, `encounters.controller.ts`, and `payments.controller.ts` all contain async route handlers with no try/catch blocks. Examples: `PatientModel.create()`, `EncounterModel.find()`, `PaymentRecordModel.findOne()`. Any Mongoose error (network timeout, duplicate key, cast error) will result in an unhandled promise rejection, which either crashes the Node process or leaves the HTTP request hanging with no response.

**Tasks:**
- Create `apps/api/src/utils/asyncHandler.ts` that wraps async route handlers and forwards errors to `next(err)`
- Apply `asyncHandler` to every async route handler across all controllers
- Alternatively, install `express-async-errors` and import it once at the top of `app.ts`
- Verify the global error handler (Issue #4) catches and formats these errors correctly

**Acceptance Criteria:**
- Simulating a DB timeout on any endpoint returns a `500` JSON response, not a hanging request
- No `UnhandledPromiseRejectionWarning` appears in logs
- All async handlers are wrapped consistently
- The pattern is documented in `CONTRIBUTING.md`

---

### #10 No input validation on encounter and payment routes

**Label:** ✨ feature  
**Branch:** `feat/validate-encounter-payment-input`  
**Timeframe:** 1 day

**Description:**
`encounters.controller.ts` passes `req.body` directly to `EncounterModel.create()` with no Zod validation. `payments.controller.ts` only destructures `amount` from `req.body` with no type or range checks. Missing required fields (e.g. `patientId`, `chiefComplaint`) will either cause a Mongoose validation error (unhandled, see Issue #9) or silently create incomplete records.

**Tasks:**
- Create `apps/api/src/modules/encounters/encounter.validation.ts` with a Zod schema requiring `patientId` (valid ObjectId string), `chiefComplaint` (min 3 chars), optional `notes` (max 5000 chars)
- Create `apps/api/src/modules/payments/payments.validation.ts` with a Zod schema requiring `amount` (positive numeric string), `patientId`
- Apply `validateRequest({ body: schema })` middleware to all POST/PATCH routes in both modules
- Validate `:id` and `:patientId` path params as valid MongoDB ObjectId strings

**Acceptance Criteria:**
- `POST /encounters` with missing `chiefComplaint` returns `400` with a Zod issues array
- `POST /payments/intent` with `amount: -5` returns `400`
- `GET /encounters/not-a-valid-id` returns `400`, not a Mongoose CastError 500
- All validation schemas are exported from their respective validation files and tested

---

### #11 CORS not configured — web app blocked by browsers in all non-local environments

**Label:** ✨ feature  
**Branch:** `feat/cors-configuration`  
**Timeframe:** 3 hours

**Description:**
`app.ts` has no CORS middleware. When the Next.js web app (running on port 3000) makes requests to the API (port 3001), browsers enforce the same-origin policy and block the requests. In production where the web app and API are on different domains, every API call will fail with a CORS error. Currently the app only appears to work because both run on localhost during development.

**Tasks:**
- Install the `cors` npm package and `@types/cors`
- Add `ALLOWED_ORIGINS` to `.env.example` as a comma-separated list
- Configure `cors({ origin: allowedOrigins, credentials: true })` in `app.ts` before route registration
- In development, allow `http://localhost:3000`; in production, only allow the configured origins
- Ensure preflight `OPTIONS` requests are handled correctly

**Acceptance Criteria:**
- A browser fetch from `http://localhost:3000` to `http://localhost:3001/api/v1/patients` succeeds without CORS errors
- A request from an unlisted origin is rejected with `403`
- `Access-Control-Allow-Credentials: true` is present in responses
- CORS config is driven by env vars, not hardcoded

---

### #12 No rate limiting — login endpoint vulnerable to brute-force attacks

**Label:** 🔒 security  
**Branch:** `feat/rate-limiting`  
**Timeframe:** 1 day

**Description:**
No rate limiting exists on any endpoint. The `/auth/login` endpoint accepts unlimited requests per second from any IP. An attacker can attempt millions of password combinations without any throttling. This is especially dangerous for a healthcare application where patient data is protected behind these credentials.

**Tasks:**
- Install `express-rate-limit`
- Apply a strict limiter to auth routes: max 10 requests per 15 minutes per IP, with a `Retry-After` header
- Apply a general limiter to all API routes: max 100 requests per minute per IP
- Store rate limit state in Redis (via `rate-limit-redis`) for multi-instance deployments; fall back to memory store for development
- Return `429 Too Many Requests` with `{ error: 'RateLimitExceeded', retryAfter: number }`
- Add `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` headers

**Acceptance Criteria:**
- The 11th login attempt within 15 minutes from the same IP returns `429`
- Rate limit headers are present on all API responses
- Rate limit state persists across server restarts when Redis is configured
- Legitimate users are not blocked during normal usage patterns

---

### #13 No `helmet` security headers — API exposes sensitive server information

**Label:** 🔒 security  
**Branch:** `feat/helmet-security-headers`  
**Timeframe:** 2 hours

**Description:**
`app.ts` does not use `helmet`. Without it, Express sends default headers that expose server information (`X-Powered-By: Express`) and omit critical security headers. Missing headers include: `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, `X-XSS-Protection`, and `Referrer-Policy`. For a HIPAA-regulated healthcare application, these headers are a compliance requirement.

**Tasks:**
- Install `helmet`
- Add `app.use(helmet())` as the very first middleware in `app.ts`, before all other middleware
- Configure `helmet.contentSecurityPolicy()` with appropriate directives for the API (no inline scripts needed for a pure JSON API)
- Disable `X-Powered-By` explicitly as a belt-and-suspenders measure
- Document the security headers in `SECURITY.md`

**Acceptance Criteria:**
- API responses include `X-Content-Type-Options: nosniff`
- API responses include `X-Frame-Options: DENY`
- `X-Powered-By` header is absent from all responses
- `Strict-Transport-Security` is present in production (`NODE_ENV=production`)
- `npm audit` shows no new vulnerabilities introduced

---

### #14 Stellar service accepts private key in HTTP request body — critical security vulnerability

**Label:** 🔒 security  
**Branch:** `fix/remove-secret-from-request-body`  
**Timeframe:** 1 day

**Description:**
`POST /intent` in `apps/stellar-service/src/index.ts` requires `fromSecret` (the Stellar private key) in the JSON request body. This means the private key travels over HTTP, is logged by any request logger, stored in access logs, and visible to any middleware or proxy in the chain. A private key exposure on a mainnet account means permanent, irreversible loss of all funds. This is the most critical security issue in the codebase.

**Tasks:**
- Remove `fromSecret` from the `/intent` request body entirely
- The stellar-service must use its own server-side keypair loaded from `config.stellar.secretKey` (env var)
- The keypair should be loaded once at startup and validated (check it can load without error)
- If `STELLAR_SECRET_KEY` is not set, the service must refuse to start
- Add a warning log on startup if `STELLAR_NETWORK=mainnet` to confirm intentional mainnet usage
- Document that `STELLAR_SECRET_KEY` must never be committed or logged

**Acceptance Criteria:**
- `POST /intent` request body contains only `{ toPublic, amount, assetCode?, issuer? }`
- The server keypair is loaded from env, never from the request
- Starting the service without `STELLAR_SECRET_KEY` exits with code 1 and a clear error
- No request body field named `secret`, `privateKey`, `fromSecret`, or similar exists on any endpoint
- Code review checklist item added to `CONTRIBUTING.md` for secret handling

---

### #15 Stellar service has no authentication — publicly accessible blockchain operations

**Label:** 🔒 security  
**Branch:** `feat/stellar-service-auth`  
**Timeframe:** 1 day

**Description:**
All three stellar-service endpoints (`POST /fund`, `POST /intent`, `GET /verify/:hash`) are completely unauthenticated. Anyone who can reach the service's port can trigger Stellar transactions, fund arbitrary accounts from the friendbot, and query transaction data. In a production deployment, this means any attacker who discovers the internal service port can drain the platform's Stellar account by creating unlimited payment transactions.

**Tasks:**
- Add a shared secret mechanism: the API service sends an `X-Internal-Secret` header on all requests to the stellar-service
- Add `STELLAR_INTERNAL_SECRET` to `.env.example`
- Create a middleware in stellar-service that validates this header on all routes
- Reject requests with missing or incorrect secret with `401`
- Alternatively, bind the stellar-service to `127.0.0.1` only (not `0.0.0.0`) so it is not externally reachable, and document this in deployment guide
- Consider mTLS for service-to-service auth in production

**Acceptance Criteria:**
- A request to `POST /intent` without the correct `X-Internal-Secret` header returns `401`
- The secret is loaded from env, not hardcoded
- The stellar-service does not listen on `0.0.0.0` in production
- Integration tests cover the auth rejection case

---

### #16 No pagination on list endpoints — unbounded DB queries

**Label:** ✨ feature  
**Branch:** `feat/pagination-list-endpoints`  
**Timeframe:** 2 days

**Description:**
`GET /patients/search` uses a hardcoded `.limit(20)`. No list endpoint supports `page` or `limit` query parameters. As the patient database grows, queries will return increasingly large payloads, slow down, and eventually time out. There is also no `GET /patients` list endpoint at all — only search and get-by-id exist.

**Tasks:**
- Add `GET /api/v1/patients` returning a paginated list filtered by `clinicId`
- Implement offset pagination with `?page=1&limit=20` query params (max limit: 100)
- Return a consistent pagination envelope: `{ data: [], meta: { total, page, limit, totalPages } }`
- Apply the same pagination pattern to `GET /encounters/patient/:patientId`
- Create a reusable `paginate(model, query, page, limit)` utility in `src/utils/paginate.ts`
- Validate `page` and `limit` as positive integers in query param schemas

**Acceptance Criteria:**
- `GET /patients?page=2&limit=10` returns the correct slice of records
- `meta.total` reflects the true count for the clinic
- `limit` above 100 is clamped or rejected with `400`
- All list endpoints use the same pagination envelope shape
- DB queries use `.skip()` and `.limit()` correctly

---

### #17 MongoDB `$regex` search is unindexed and vulnerable to ReDoS

**Label:** 🔒 security  
**Branch:** `fix/patient-search-text-index`  
**Timeframe:** 1 day

**Description:**
`patients.controller.ts` uses `{ $regex: q, $options: 'i' }` on `firstName` and `lastName` fields. Unanchored regex queries cannot use indexes and perform full collection scans. More critically, a malicious user can send a crafted regex-like string (e.g. `(a+)+`) that causes catastrophic backtracking in the regex engine, consuming 100% CPU and effectively DoS-ing the server. The `q` parameter has no length or character validation.

**Tasks:**
- Replace the `$regex` query with MongoDB `$text` search using the existing text index on `firstName`, `lastName`, `systemId`
- Use `{ $text: { $search: q } }` with `{ score: { $meta: 'textScore' } }` for relevance sorting
- Add input validation: `q` must be a string, min 2 chars, max 100 chars, stripped of special regex characters
- Add `patientSearchQuerySchema` validation middleware to the search route
- If `$text` search is insufficient, use anchored regex `^${escapedQ}` with an index hint

**Acceptance Criteria:**
- `GET /patients/search?q=john` uses the text index (verify with `explain()`)
- `GET /patients/search?q=` returns `400`
- `GET /patients/search?q=` with a 500-char string returns `400`
- Search results are ordered by relevance score
- No full collection scan occurs on any search query

---

### #18 No update or delete endpoints for patients or encounters

**Label:** ✨ feature  
**Branch:** `feat/patient-encounter-update-delete`  
**Timeframe:** 3 days

**Description:**
Only `POST` (create) and `GET` (read) are implemented for patients and encounters. There is no way to correct a patient's details, update an encounter's notes, or deactivate a patient record. In a real EMR, updating records is a core daily workflow. The absence of these endpoints means the frontend cannot build any edit functionality.

**Tasks:**
- Implement `PATCH /api/v1/patients/:id` — partial update of allowed fields only (`firstName`, `lastName`, `contactNumber`, `address`). Fields like `clinicId`, `systemId`, `dateOfBirth` must not be updatable
- Implement `DELETE /api/v1/patients/:id` as a soft delete (set `isActive: false`, never hard delete medical records)
- Implement `PATCH /api/v1/encounters/:id` — update `notes`, `diagnosis`, `treatmentPlan`, `aiSummary`
- Implement `DELETE /api/v1/encounters/:id` as soft delete
- All update endpoints must enforce `clinicId` scoping (a clinic can only update its own records)
- Apply RBAC: only `DOCTOR`, `CLINIC_ADMIN`, `SUPER_ADMIN` can update; `READ_ONLY` cannot

**Acceptance Criteria:**
- `PATCH /patients/:id` with `{ contactNumber: '07000000000' }` updates only that field
- `PATCH /patients/:id` with `{ clinicId: 'other' }` returns `400` (field not updatable)
- `DELETE /patients/:id` sets `isActive: false`, record still exists in DB
- A `READ_ONLY` user attempting `PATCH /patients/:id` receives `403`
- Soft-deleted patients do not appear in list or search results by default

---

### #19 No Clinic model — `clinicId` references a non-existent collection

**Label:** ✨ feature  
**Branch:** `feat/clinic-model-and-routes`  
**Timeframe:** 3 days

**Description:**
`clinicId` is used as the primary multi-tenancy key across users, patients, encounters, and payments. However, there is no `Clinic` model, no clinic registration endpoint, and no validation that a given `clinicId` actually exists. This means: (1) users can be created with arbitrary `clinicId` values, (2) there is no way to manage clinic settings, and (3) data isolation relies entirely on trusting the JWT payload.

**Tasks:**
- Create `apps/api/src/modules/clinics/clinic.model.ts` with fields: `name`, `address`, `contactEmail`, `isActive`, `plan` (enum: `free`, `pro`, `enterprise`)
- Create `POST /api/v1/clinics` (SUPER_ADMIN only) to register a new clinic
- Create `GET /api/v1/clinics/:id` for clinic details
- Add a Mongoose middleware or service-layer check that validates `clinicId` exists before creating users or patients
- Update `UserModel` to use `Schema.Types.ObjectId` ref to `Clinic` and add a Mongoose populate path

**Acceptance Criteria:**
- `POST /auth/register` with a non-existent `clinicId` returns `404 { error: 'ClinicNotFound' }`
- `POST /clinics` by a non-SUPER_ADMIN returns `403`
- `GET /clinics/:id` returns clinic details for a valid ID
- Clinic collection exists in MongoDB after running the seed script
- All existing `clinicId` string fields are migrated to ObjectId references

---

### #20 No structured logging — `console.log` throughout production code

**Label:** ✨ feature  
**Branch:** `feat/structured-logging-pino`  
**Timeframe:** 1 day

**Description:**
`db.ts`, `app.ts`, and `stellar-service/src/index.ts` use `console.log` and `console.error`. In production, this produces unstructured text logs with no timestamps, no log levels, no request correlation IDs, and no machine-parseable format. This makes debugging production incidents extremely difficult and prevents integration with log aggregation tools (Datadog, CloudWatch, ELK).

**Tasks:**
- Install `pino` and `pino-http` in the API package
- Create `apps/api/src/utils/logger.ts` exporting a configured pino instance
- Replace all `console.log`/`console.error` calls with `logger.info`/`logger.error`
- Add `pino-http` as middleware in `app.ts` to log every request with method, path, status, duration, and correlation ID
- Add the same logger to stellar-service
- In development, use `pino-pretty` for human-readable output; in production, use JSON

**Acceptance Criteria:**
- Every log line in production is valid JSON with `level`, `time`, `msg`, `reqId` fields
- HTTP requests are logged with status code and response time
- `console.log` and `console.error` do not appear anywhere in `src/` directories
- Log level is configurable via `LOG_LEVEL` env var (default: `info`)
- Sensitive fields (passwords, tokens) are never logged

---

### #21 No graceful shutdown — in-flight requests dropped on process exit

**Label:** ✨ feature  
**Branch:** `feat/graceful-shutdown`  
**Timeframe:** 1 day

**Description:**
Neither `app.ts` nor `stellar-service` handle `SIGTERM` or `SIGINT` signals. When a container orchestrator (Kubernetes, ECS) sends `SIGTERM` to deploy a new version, the process exits immediately, dropping all in-flight HTTP requests and leaving MongoDB connections open. This causes errors for users mid-request and can corrupt in-progress Stellar transactions.

**Tasks:**
- Add `process.on('SIGTERM', shutdown)` and `process.on('SIGINT', shutdown)` in both `app.ts` and stellar-service
- The `shutdown` function must: stop accepting new connections (`server.close()`), wait for in-flight requests to complete (with a 10-second timeout), close the Mongoose connection (`mongoose.connection.close()`), then exit with code 0
- Log each step of the shutdown sequence
- Add a `SHUTDOWN_TIMEOUT_MS` env var (default: 10000)

**Acceptance Criteria:**
- Sending `SIGTERM` to the API process logs `Shutting down gracefully...` and exits cleanly
- In-flight requests complete before the process exits (within the timeout)
- MongoDB connection is closed before process exit (no "topology was destroyed" errors)
- Process exits with code 0 on clean shutdown, code 1 on forced timeout

---

### #22 `packages/config/index.ts` resolves `.env` path relative to `__dirname` — breaks in production builds

**Label:** 🐛 bug  
**Branch:** `fix/config-dotenv-entry-point`  
**Timeframe:** 3 hours

**Description:**
`packages/config/index.ts` calls `dotenv.config({ path: path.resolve(__dirname, "../../.env") })`. When TypeScript is compiled to `dist/`, `__dirname` points to `packages/config/dist/` and the relative path `../../.env` resolves to a completely different location. In production, env vars should come from the process environment (set by the deployment platform), not from a `.env` file. This pattern also means every package that imports config re-runs `dotenv.config()`.

**Tasks:**
- Remove the `dotenv.config()` call from `packages/config/index.ts`
- Load `.env` once at the application entry point (`app.ts` and `stellar-service/src/index.ts`) using `dotenv/config` import or `dotenv.config()` with no path argument (reads from `process.cwd()`)
- Add startup env validation using `zod` to parse and validate all required env vars
- Export the validated, typed config object — no raw `process.env` access outside of `config/index.ts`

**Acceptance Criteria:**
- `npm run build && npm run start` works correctly with env vars set in the shell (no `.env` file needed)
- Starting without required env vars prints a clear validation error listing missing vars
- `dotenv.config()` is called exactly once per process
- No `process.env.X` access exists outside of `packages/config/index.ts`

---

### #23 No payment confirmation flow — payment records stuck in `pending` forever

**Label:** ✨ feature  
**Branch:** `feat/payment-confirmation-flow`  
**Timeframe:** 3 days

**Description:**
`POST /payments/intent` creates a payment record with `status: 'pending'` and returns the Stellar destination and memo. However, there is no endpoint to confirm that the on-chain transaction actually occurred. The stub `POST /payments/confirm` in the old routes file was never implemented. Payment records will remain `pending` indefinitely with no reconciliation mechanism.

**Tasks:**
- Implement `POST /api/v1/payments/confirm` accepting `{ intentId, txHash }`
- The endpoint must call the stellar-service `GET /verify/:hash` to fetch the on-chain transaction
- Verify the transaction: correct destination address, correct amount, correct memo matching the intent
- If valid, update the `PaymentRecordModel` to `status: 'confirmed'` and store `txHash`
- If invalid or not found, update to `status: 'failed'` with a `failureReason` field
- Add a `txHash` field and `confirmedAt` timestamp to `PaymentRecordModel`
- Add a background job (or cron) that auto-expires `pending` intents older than 30 minutes

**Acceptance Criteria:**
- `POST /payments/confirm` with a valid `txHash` matching the intent updates status to `confirmed`
- `POST /payments/confirm` with a mismatched amount updates status to `failed`
- `GET /payments/status/:intentId` returns `confirmed` after successful confirmation
- Payment records older than 30 minutes with `pending` status are automatically marked `failed`
- `txHash` is stored and returned in the status response

---

### #24 No NoSQL injection sanitization

**Label:** 🔒 security  
**Branch:** `feat/nosql-injection-sanitization`  
**Timeframe:** 3 hours

**Description:**
`req.body`, `req.query`, and `req.params` are passed to Mongoose queries without sanitizing MongoDB operators. An attacker can send `{ "email": { "$gt": "" } }` in the login body to bypass email matching, or inject `{ "$where": "..." }` to execute arbitrary JavaScript in the DB. While Mongoose provides some protection, it does not strip all operator injection vectors, especially in query parameters.

**Tasks:**
- Install `express-mongo-sanitize`
- Add `app.use(mongoSanitize())` in `app.ts` after `express.json()` but before routes
- Configure it to replace prohibited characters (`$`, `.`) rather than remove the key entirely, so validation errors are still triggered
- Add a test case demonstrating that `{ "email": { "$gt": "" } }` in the login body returns `400`, not `200`
- Document the protection in `SECURITY.md`

**Acceptance Criteria:**
- `POST /auth/login` with `{ "email": { "$gt": "" }, "password": "test" }` returns `400`, not `200` or `401`
- `express-mongo-sanitize` is listed in `apps/api/package.json` dependencies
- Middleware is applied before all route handlers
- Existing valid requests are unaffected by the sanitization

---

### #25 No request body size limit — potential DoS via large payloads

**Label:** 🔒 security  
**Branch:** `feat/request-body-size-limit`  
**Timeframe:** 3 hours

**Description:**
`app.use(express.json())` is called with no size limit. By default, Express allows up to 100kb JSON bodies. However, the AI summarize endpoint (when implemented) could receive very large clinical notes. Without an explicit limit, an attacker can send multi-megabyte JSON payloads to exhaust memory and CPU.

**Tasks:**
- Set an explicit body size limit: `app.use(express.json({ limit: '50kb' }))` for standard routes
- For the AI summarize endpoint, allow a larger limit (e.g. `500kb`) via a separate middleware applied only to that route
- Return `413 Payload Too Large` for oversized requests
- Add the limit to `SECURITY.md`

**Acceptance Criteria:**
- A `POST /patients` request with a 100kb JSON body returns `413`
- A `POST /patients` request with a 1kb JSON body succeeds normally
- The AI route allows larger payloads than standard routes
- The limit is configurable via env var `MAX_REQUEST_BODY_SIZE`

---

### #26 `EncounterModel` missing critical clinical fields

**Label:** ✨ feature  
**Branch:** `feat/encounter-clinical-fields`  
**Timeframe:** 2 days

**Description:**
The encounter schema only has `chiefComplaint`, `notes`, and `aiSummary`. A real EMR encounter record requires structured clinical data to be medically useful and compliant. Missing fields include diagnosis codes, vital signs, prescriptions, and the attending clinician. Without these, the system cannot support real clinical workflows.

**Tasks:**
- Add the following fields to `EncounterModel`:
  - `diagnosis: [{ code: string, description: string, type: 'primary'|'secondary' }]`
  - `vitalSigns: { bloodPressure?, heartRate?, temperature?, weight?, height?, oxygenSaturation? }`
  - `prescriptions: [{ medication, dosage, frequency, duration, notes? }]`
  - `treatmentPlan: string`
  - `followUpDate: Date` (optional)
  - `attendingDoctorId: ObjectId` (ref: User)
  - `status: 'draft' | 'completed' | 'cancelled'`
- Update the encounter validation schema to match
- Add indexes on `attendingDoctorId` and `status`

**Acceptance Criteria:**
- `POST /encounters` accepts and stores all new fields
- `vitalSigns` sub-document fields are all optional individually
- `attendingDoctorId` is validated as a valid User ObjectId
- Existing encounter records without new fields are not broken (all new fields optional or have defaults)
- TypeScript types reflect the new schema

---

### #27 No `GET /api/v1/encounters` list endpoint

**Label:** ✨ feature  
**Branch:** `feat/encounters-list-endpoint`  
**Timeframe:** 1 day

**Description:**
The encounters module only has `POST /`, `GET /:id`, and `GET /patient/:patientId`. There is no endpoint to list all encounters for a clinic (e.g. for a dashboard showing today's appointments). The web encounters page tries to fetch `GET /api/v1/encounters` which doesn't exist, so it always shows an empty list.

**Tasks:**
- Implement `GET /api/v1/encounters` with pagination, filtered by `clinicId`
- Support optional query filters: `?patientId=`, `?doctorId=`, `?status=`, `?date=` (ISO date string for a specific day)
- Return the pagination envelope consistent with other list endpoints
- Apply `authenticate` and `authorize([DOCTOR, CLINIC_ADMIN, SUPER_ADMIN, NURSE])` middleware

**Acceptance Criteria:**
- `GET /encounters` returns a paginated list of encounters for the authenticated user's clinic
- `GET /encounters?status=completed` filters correctly
- `GET /encounters?date=2026-03-20` returns only encounters from that day
- A `READ_ONLY` user can access the list
- Response time is under 200ms for a clinic with 10,000 encounters (with proper indexing)

---

### #28 No `GET /api/v1/payments` list endpoint

**Label:** ✨ feature  
**Branch:** `feat/payments-list-endpoint`  
**Timeframe:** 1 day

**Description:**
The payments module only has `POST /intent`, `GET /status/:intentId`, and the unimplemented `POST /confirm`. The web payments page fetches `GET /api/v1/payments` which doesn't exist. There is no way to view payment history for a clinic.

**Tasks:**
- Implement `GET /api/v1/payments` with pagination, filtered by `clinicId`
- Support optional filters: `?status=pending|confirmed|failed`, `?patientId=`
- Include `patientId`, `amount`, `status`, `txHash`, `createdAt`, `confirmedAt` in the response
- Apply authentication and RBAC (CLINIC_ADMIN and above)

**Acceptance Criteria:**
- `GET /payments` returns paginated payment records for the clinic
- `GET /payments?status=confirmed` returns only confirmed payments
- Response includes all relevant fields for display in the UI
- Unauthenticated requests return `401`

---

### #29 No environment variable validation on startup

**Label:** ✨ feature  
**Branch:** `feat/env-validation-on-startup`  
**Timeframe:** 1 day

**Description:**
The application starts successfully even when critical env vars are empty strings or missing. `MONGO_URI=""` causes a silent connection failure. `JWT_SECRET=""` means all tokens are signed with an empty string — trivially forgeable. `STELLAR_SECRET_KEY=""` causes the stellar-service to crash mid-request rather than at startup. These failures should be caught immediately at boot, not during the first request.

**Tasks:**
- Create `apps/api/src/config/env.ts` using `zod` to define and parse all required env vars
- Required vars: `MONGO_URI`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `API_PORT`
- Optional with defaults: `NODE_ENV` (default: `development`), `LOG_LEVEL` (default: `info`), `ALLOWED_ORIGINS`
- If validation fails, print a table of missing/invalid vars and call `process.exit(1)`
- Do the same in stellar-service for its required vars
- Import and run env validation as the very first line of `app.ts`

**Acceptance Criteria:**
- Starting the API without `MONGO_URI` prints `Missing required env var: MONGO_URI` and exits with code 1
- Starting with all vars set proceeds normally
- `JWT_ACCESS_SECRET` with fewer than 32 characters is rejected as too weak
- The validation runs before any other module is imported (no partial initialization)
- CI pipeline sets all required env vars for the build/test steps

---

### #30 No OpenAPI / Swagger documentation — no API contract for frontend or third parties

**Label:** ✨ feature  
**Branch:** `feat/openapi-swagger-docs`  
**Timeframe:** 3 days

**Description:**
There is no API documentation. Frontend developers must read controller source code to understand request/response shapes. Third-party integrators have no contract to work against. As the API grows, undocumented endpoints become a maintenance burden and source of integration bugs.

**Tasks:**
- Install `swagger-jsdoc` and `swagger-ui-express` in the API package
- Create `apps/api/src/docs/swagger.ts` defining the OpenAPI 3.0 base document (title, version, servers, security schemes)
- Add JSDoc `@swagger` annotations to all route handlers documenting request body, query params, path params, and response schemas
- Mount Swagger UI at `GET /api/docs` (disabled in production via `NODE_ENV` check, or protected by basic auth)
- Alternatively, use `zod-to-openapi` to auto-generate schemas from existing Zod validation schemas
- Add a `GET /api/docs/openapi.json` endpoint returning the raw spec for tooling integration

**Acceptance Criteria:**
- `GET /api/docs` renders the Swagger UI with all endpoints documented
- Every endpoint has documented request body schema, response schemas (200, 400, 401, 403, 404, 500), and auth requirements
- The OpenAPI spec is valid (passes `swagger-parser` validation)
- Swagger UI is not accessible in production without authentication
- The spec is versioned and updated as part of the PR process (documented in `CONTRIBUTING.md`)

---

### #31 Patient data returned without field filtering — internal fields exposed

**Label:** 🔒 security  
**Branch:** `fix/patient-response-field-filtering`  
**Timeframe:** 1 day

**Description:**
API endpoints return full Mongoose documents including `__v`, raw `_id` ObjectIds, and internal fields. The `clinicId` ObjectId is exposed in every patient response, which leaks internal database structure. The `isActive` flag and `searchName` (an internal search optimization field) are also returned to clients unnecessarily.

**Tasks:**
- Create a `toPatientResponse(doc)` transformer function in `apps/api/src/modules/patients/patients.transformer.ts` that maps the Mongoose document to a clean response shape
- The response shape should include: `id` (mapped from `_id`), `systemId`, `firstName`, `lastName`, `dateOfBirth`, `sex`, `contactNumber`, `address`, `createdAt`, `updatedAt`
- Exclude: `__v`, `_id` (raw), `clinicId`, `isActive`, `searchName`
- Apply the transformer to all patient endpoint responses
- Do the same for encounters (`toEncounterResponse`) and payments (`toPaymentResponse`)
- Use Mongoose `.select()` to avoid fetching excluded fields from the DB in the first place

**Acceptance Criteria:**
- `GET /patients/:id` response does not contain `__v`, `clinicId`, `isActive`, or `searchName`
- The `id` field in the response is a string, not a MongoDB ObjectId object
- `GET /patients/:id` for a patient belonging to a different clinic returns `404`, not the record with `clinicId` exposed
- All response shapes are documented in the OpenAPI spec (Issue #30)

---

### #32 `zod` missing from `apps/api` dependencies

**Label:** 🐛 bug  
**Branch:** `fix/add-zod-to-api-deps`  
**Timeframe:** 1 hour

**Description:**
`apps/api/src/middlewares/validate.middleware.ts` and all `*.validation.ts` files import from `zod`. However, `zod` is not listed in `apps/api/package.json` dependencies. It may work locally if `zod` is hoisted from another package's `node_modules`, but this is an implicit dependency that will break in clean installs, CI environments, or when hoisting behaviour changes.

**Tasks:**
- Add `"zod": "^3.22.0"` to `apps/api/package.json` `dependencies`
- Add `"zod": "^3.22.0"` to `apps/web/package.json` `dependencies` (needed for form validation)
- Run `npm install` to update `package-lock.json`
- Verify `npm ci` in a clean environment resolves `zod` correctly for the API package

**Acceptance Criteria:**
- `zod` is listed in `apps/api/package.json` `dependencies`
- `npm ci` in a fresh clone resolves `zod` for the API without relying on hoisting
- `npm run build` succeeds in the API package after the change
- No implicit peer dependency warnings related to `zod`

---

### #33 `packages/types/index.ts` and `packages/types/src/index.ts` both exist — ambiguous entry point

**Label:** 🐛 bug  
**Branch:** `fix/types-package-entry-point`  
**Timeframe:** 3 hours

**Description:**
Two `index.ts` files exist: one at `packages/types/index.ts` (root level, re-exports from `src/`) and one at `packages/types/src/index.ts` (the actual source). The `package.json` for `packages/types` has no `main` or `exports` field, so TypeScript and Node resolve the entry point ambiguously. Different consumers may resolve different files, leading to subtle type mismatches.

**Tasks:**
- Remove `packages/types/index.ts` (the root-level re-export file)
- Add `"main": "src/index.ts"` to `packages/types/package.json` for development
- Add `"exports": { ".": { "import": "./dist/index.js", "require": "./dist/index.js", "types": "./dist/index.d.ts" } }` for production builds
- Add a `build` script to `packages/types/package.json`: `"build": "tsc"`
- Verify all consumers (`apps/api`, `apps/web`) resolve types correctly after the change

**Acceptance Criteria:**
- Only one `index.ts` exists in `packages/types`
- `packages/types/package.json` has explicit `main` and `exports` fields
- `import { Patient } from '@health-watchers/types'` resolves to the correct type in both API and web
- `npm run build` in `packages/types` produces a `dist/` directory with `.d.ts` files
- No TypeScript errors related to type resolution across packages

---

### #34 No AI implementation — `POST /ai/summarize` returns 501

**Label:** ✨ feature  
**Branch:** `feat/ai-summarize-gemini`  
**Timeframe:** 3 days

**Description:**
`apps/api/src/modules/ai/ai.routes.ts` has a single route `POST /ai/summarize` that returns 501. The README lists AI clinical summaries as a key feature. The `EncounterModel` has an `aiSummary` field. The `GEMINI_API_KEY` env var is configured. None of this is wired together.

**Tasks:**
- Install `@google/generative-ai` in `apps/api`
- Create `apps/api/src/modules/ai/ai.service.ts` that initialises the Gemini client using `config.geminiApiKey`
- Implement `POST /api/v1/ai/summarize` accepting `{ encounterId }`, fetching the encounter from DB, and sending the clinical notes to Gemini with a structured prompt
- The prompt should ask Gemini to produce: a 2-sentence clinical summary, key diagnoses, and recommended follow-up actions
- Store the result in `encounter.aiSummary` and return it in the response
- Add rate limiting specific to the AI endpoint (Gemini API has its own rate limits)
- Handle Gemini API errors gracefully (quota exceeded, content policy violations)

**Acceptance Criteria:**
- `POST /ai/summarize` with a valid `encounterId` returns a structured AI summary
- The summary is stored in the encounter's `aiSummary` field
- If `GEMINI_API_KEY` is not set, the endpoint returns `503 { error: 'AIServiceUnavailable' }`
- Gemini API errors return `502 { error: 'AIServiceError' }` with a user-friendly message
- The AI endpoint is protected by authentication and RBAC (DOCTOR and above)

---

### #35 No WebSocket / real-time updates

**Label:** ✨ feature  
**Branch:** `feat/websocket-realtime-updates`  
**Timeframe:** 5 days

**Description:**
The README lists real-time WebSockets as a roadmap item. In a clinical setting, real-time updates are important: a nurse updating a patient's vitals should be visible to the attending doctor immediately without a page refresh. The current polling-based approach (if implemented) wastes resources and introduces latency.

**Tasks:**
- Install `socket.io` in the API and `socket.io-client` in the web app
- Create `apps/api/src/realtime/socket.ts` initialising a Socket.IO server attached to the Express HTTP server
- Implement rooms scoped by `clinicId` so clinics only receive their own updates
- Emit events on: patient created/updated, encounter created/updated, payment confirmed
- In the web app, connect to the Socket.IO server after login and listen for relevant events
- On receiving an event, use TanStack Query's `queryClient.invalidateQueries()` to refresh the affected data
- Authenticate Socket.IO connections using the JWT access token

**Acceptance Criteria:**
- Creating a patient in one browser tab causes the patient list to update in another tab without a page refresh
- Socket.IO connections are authenticated — unauthenticated connections are rejected
- Events are scoped to the correct clinic — a clinic cannot receive another clinic's events
- Socket.IO server gracefully handles disconnections and reconnections
- The feature is documented in `README.md`

---

### #36 No Stellar mainnet safety checks

**Label:** 🔒 security  
**Branch:** `feat/stellar-mainnet-safety-checks`  
**Timeframe:** 1 day

**Description:**
The stellar-service can be switched to mainnet by setting `STELLAR_NETWORK=mainnet`. There are no safety checks, confirmation prompts, or additional validation for mainnet transactions. A misconfiguration (e.g. accidentally setting `STELLAR_NETWORK=mainnet` in a staging environment) could result in real XLM being sent from the platform account.

**Tasks:**
- Add a startup check in stellar-service: if `STELLAR_NETWORK=mainnet`, log a prominent warning: `⚠️  MAINNET MODE ACTIVE — real XLM transactions will be submitted`
- Add a `STELLAR_MAINNET_CONFIRMED=true` env var that must be explicitly set to allow mainnet operation; if missing, the service refuses to start in mainnet mode
- Add transaction amount limits: reject any single transaction above `STELLAR_MAX_TRANSACTION_XLM` (configurable, default: 1000 XLM)
- Disable the `/fund` (friendbot) endpoint entirely when `STELLAR_NETWORK=mainnet`
- Add a dry-run mode: `STELLAR_DRY_RUN=true` logs what would be submitted without actually submitting

**Acceptance Criteria:**
- Starting stellar-service with `STELLAR_NETWORK=mainnet` without `STELLAR_MAINNET_CONFIRMED=true` exits with code 1
- `POST /fund` returns `403` when `STELLAR_NETWORK=mainnet`
- A transaction above `STELLAR_MAX_TRANSACTION_XLM` returns `400 { error: 'TransactionLimitExceeded' }`
- The mainnet warning is logged at the `warn` level on every startup in mainnet mode
- `STELLAR_DRY_RUN=true` logs the transaction details without submitting and returns `{ dryRun: true }`

---

### #37 No multi-currency support — only XLM payments

**Label:** ✨ feature  
**Branch:** `feat/multi-currency-stellar-payments`  
**Timeframe:** 2 days

**Description:**
The payment system only supports XLM (Stellar's native asset). Real healthcare payments involve local fiat currencies. Stellar supports custom assets (stablecoins like USDC on Stellar). Limiting to XLM makes the payment system impractical for real-world healthcare billing.

**Tasks:**
- Update `POST /payments/intent` to accept `assetCode` and `issuer` fields (already partially present in stellar-service but not in the API payment intent)
- Add supported assets configuration: `SUPPORTED_ASSETS` env var listing allowed `assetCode:issuer` pairs
- Validate that the requested asset is in the supported list before creating the intent
- Update `PaymentRecordModel` to store `assetCode` and `assetIssuer`
- Update the payments UI to show the asset code alongside the amount
- Add USDC on Stellar testnet as the default non-XLM asset in `.env.example`

**Acceptance Criteria:**
- `POST /payments/intent` with `{ amount: '10', assetCode: 'USDC', issuer: 'G...' }` creates a USDC payment intent
- Requesting an unsupported asset returns `400 { error: 'UnsupportedAsset' }`
- `PaymentRecordModel` stores `assetCode` and `assetIssuer` for every record
- The payments list UI displays `10 USDC` instead of `10 XLM` for USDC payments
- XLM (native) remains supported with no `issuer` required

---

### #38 No patient appointment / scheduling module

**Label:** ✨ feature  
**Branch:** `feat/appointment-scheduling-module`  
**Timeframe:** 5 days

**Description:**
The README describes a full EMR but there is no appointment scheduling. Clinics need to book, reschedule, and cancel patient appointments. Without scheduling, the system cannot manage patient flow or send reminders.

**Tasks:**
- Create `apps/api/src/modules/appointments/appointment.model.ts` with fields: `patientId`, `clinicId`, `doctorId`, `scheduledAt` (DateTime), `durationMinutes`, `status` (enum: `scheduled`, `confirmed`, `cancelled`, `completed`, `no_show`), `reason`, `notes`
- Implement CRUD endpoints: `POST /appointments`, `GET /appointments`, `GET /appointments/:id`, `PATCH /appointments/:id`, `DELETE /appointments/:id` (soft delete)
- Add conflict detection: prevent double-booking a doctor at the same time slot
- Add `GET /appointments/availability?doctorId=&date=` to return available time slots for a doctor on a given day
- Add appointment reminder emails (Issue #73)

**Acceptance Criteria:**
- `POST /appointments` creates an appointment and returns `201`
- Booking a doctor at an already-occupied time slot returns `409 { error: 'TimeSlotUnavailable' }`
- `GET /appointments/availability` returns available 30-minute slots for the requested day
- `PATCH /appointments/:id` with `status: 'cancelled'` soft-cancels the appointment
- Appointments are scoped to the clinic

---

### #39 No email notification system

**Label:** ✨ feature  
**Branch:** `feat/email-notification-system`  
**Timeframe:** 5 days

**Description:**
The application has no email sending capability. Critical notifications are missing: password reset emails, appointment reminders, payment receipts, and account lockout notifications. Without email, the password reset flow (Issue #10) cannot be implemented, and users have no way to recover locked accounts.

**Tasks:**
- Install `nodemailer` and create `apps/api/src/utils/mailer.ts` with a configured transporter
- Add `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_FROM` to `.env.example`
- Create email templates (HTML) for: password reset, appointment reminder, payment receipt, account locked
- Implement the password reset email in `POST /auth/forgot-password`
- Implement appointment reminder emails 24 hours before the appointment (via a cron job)
- Implement payment receipt email on `status: 'confirmed'`
- Use a queue (Bull/BullMQ with Redis) for email sending to avoid blocking request handlers

**Acceptance Criteria:**
- `POST /auth/forgot-password` sends a password reset email within 30 seconds
- The reset link in the email is valid for 1 hour and single-use
- Appointment reminder emails are sent 24 hours before the scheduled time
- Payment receipt emails include the amount, transaction hash, and Stellar explorer link
- Email sending failures are logged but do not cause the originating request to fail

---

### #40 No image or file upload support for patient documents

**Label:** ✨ feature  
**Branch:** `feat/document-file-upload-s3`  
**Timeframe:** 5 days

**Description:**
A real EMR needs to store patient documents: lab results, referral letters, consent forms, and medical images. There is no file upload endpoint, no storage integration, and no document model. Without this, the system cannot replace paper-based record keeping.

**Tasks:**
- Create `apps/api/src/modules/documents/document.model.ts` with fields: `patientId`, `clinicId`, `uploadedBy`, `fileName`, `mimeType`, `sizeBytes`, `storageKey` (S3 key or local path), `documentType` (enum: `LAB_RESULT`, `REFERRAL`, `CONSENT`, `IMAGING`, `OTHER`), `createdAt`
- Implement `POST /api/v1/documents/upload` using `multer` for multipart form data
- Store files in AWS S3 (or local disk for development) using `@aws-sdk/client-s3`
- Implement `GET /api/v1/documents/:id/download` that generates a pre-signed S3 URL (valid for 15 minutes)
- Enforce file type validation (allow: PDF, JPEG, PNG, DICOM) and size limit (max 20MB)
- Add `STORAGE_PROVIDER` env var (`s3` or `local`) and `AWS_S3_BUCKET` to `.env.example`

**Acceptance Criteria:**
- `POST /documents/upload` with a valid PDF returns `201` with the document metadata
- `GET /documents/:id/download` returns a pre-signed URL that expires in 15 minutes
- Uploading a `.exe` file returns `400 { error: 'InvalidFileType' }`
- Uploading a file over 20MB returns `413`
- Documents are scoped to the clinic — a clinic cannot download another clinic's documents

---

### #41 No request ID / correlation ID for distributed tracing

**Label:** ✨ feature  
**Branch:** `feat/request-correlation-id`  
**Timeframe:** 1 day

**Description:**
When a request flows through the web app → API → stellar-service, there is no shared identifier to correlate log entries across services. Debugging a failed payment requires manually correlating timestamps across three separate log streams, which is error-prone and time-consuming in production incidents.

**Tasks:**
- Generate a `requestId` (UUID v4) for every incoming request in the API using `pino-http`'s `genReqId` option
- Pass the `requestId` as an `X-Request-ID` header in all outgoing requests from the API to the stellar-service
- In the stellar-service, read `X-Request-ID` from incoming requests and include it in all log entries
- Return `X-Request-ID` in all API responses so clients can reference it when reporting issues
- Include `requestId` in all error responses: `{ error: '...', requestId: '...' }`

**Acceptance Criteria:**
- Every API response includes an `X-Request-ID` header
- Log entries for a single request across API and stellar-service share the same `requestId`
- Error responses include `requestId` so users can report it to support
- `requestId` is a valid UUID v4
- The correlation ID is documented in `DEPLOYMENT.md` under the debugging section

---

### #42 No database connection pooling configuration

**Label:** ✨ feature  
**Branch:** `feat/mongo-connection-pool-config`  
**Timeframe:** 3 hours

**Description:**
`mongoose.connect(config.mongoUri)` is called with no connection pool options. Mongoose's default pool size is 5 connections. Under load, the API will queue requests waiting for a free connection, causing latency spikes. For a production application, the pool size should be tuned to the expected concurrency and the MongoDB server's capacity.

**Tasks:**
- Update `connectDB()` to pass connection options: `{ maxPoolSize: 10, minPoolSize: 2, serverSelectionTimeoutMS: 5000, socketTimeoutMS: 45000 }`
- Add `MONGO_MAX_POOL_SIZE` env var (default: 10) to `.env.example` and config
- Add a Mongoose connection event listener that logs pool events in development: `connected`, `disconnected`, `reconnected`
- Add a `/health` endpoint enhancement that includes DB connection state: `{ status: 'ok', db: 'connected' | 'disconnected' }`

**Acceptance Criteria:**
- `connectDB()` passes pool size options to `mongoose.connect()`
- `GET /health` returns `{ status: 'ok', db: 'connected' }` when MongoDB is reachable
- `GET /health` returns `{ status: 'degraded', db: 'disconnected' }` when MongoDB is unreachable (without crashing)
- Pool size is configurable via env var
- Connection events are logged at the `debug` level

---

### #43 No data export / patient data portability

**Label:** ✨ feature  
**Branch:** `feat/patient-data-export-hipaa`  
**Timeframe:** 3 days

**Description:**
HIPAA's Right of Access (45 CFR § 164.524) requires covered entities to provide patients with access to their PHI in a readable format within 30 days of request. There is no data export functionality. A patient cannot request their records, and a clinic cannot export data for migration or audit purposes.

**Tasks:**
- Implement `GET /api/v1/patients/:id/export` that returns a patient's complete record as a JSON or PDF file, including all encounters, payments, and documents
- Implement `GET /api/v1/clinics/:id/export` (SUPER_ADMIN only) that exports all clinic data as a ZIP archive
- For PDF generation, use `pdfkit` or `puppeteer`
- Add an audit log entry for every data export (Issue #51)
- Rate-limit the export endpoint (max 5 exports per hour per clinic)
- Document the data export process in `DEPLOYMENT.md` under the HIPAA compliance section

**Acceptance Criteria:**
- `GET /patients/:id/export?format=json` returns a complete JSON record for the patient
- `GET /patients/:id/export?format=pdf` returns a formatted PDF with all patient data
- Every export creates an audit log entry with `action: 'EXPORT_PATIENT_DATA'`
- The export endpoint is rate-limited to 5 requests per hour per clinic
- Exported data includes all encounters, payments, and document metadata (not the files themselves)


---

## FRONTEND / WEB

---

### #44 API base URL hardcoded as `http://localhost:3001` in every page

**Label:** 🐛 bug  
**Branch:** `fix/api-base-url-env-var`  
**Timeframe:** 3 hours

**Description:**
`POST /intent` in `apps/stellar-service/src/index.ts` requires `fromSecret` (the Stellar private key) in the JSON request body. This means the private key travels over HTTP, is logged by any request logger, stored in access logs, and visible to any middleware or proxy in the chain. A private key exposure on a mainnet account means permanent, irreversible loss of all funds. This is the most critical security issue in the codebase.

**Tasks:**
- Remove `fromSecret` from the `/intent` request body entirely
- The stellar-service must use its own server-side keypair loaded from `config.stellar.secretKey` (env var)
- The keypair should be loaded once at startup and validated (check it can load without error)
- If `STELLAR_SECRET_KEY` is not set, the service must refuse to start
- Add a warning log on startup if `STELLAR_NETWORK=mainnet` to confirm intentional mainnet usage
- Document that `STELLAR_SECRET_KEY` must never be committed or logged

**Acceptance Criteria:**
- `POST /intent` request body contains only `{ toPublic, amount, assetCode?, issuer? }`
- The server keypair is loaded from env, never from the request
- Starting the service without `STELLAR_SECRET_KEY` exits with code 1 and a clear error
- No request body field named `secret`, `privateKey`, `fromSecret`, or similar exists on any endpoint
- Code review checklist item added to `CONTRIBUTING.md` for secret handling
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #45 No authentication in the web app — all pages are publicly accessible

**Label:** ✨ feature  
**Branch:** `feat/web-authentication-flow`  
**Timeframe:** 5 days

**Description:**
The web app has no login page, no session management, and no route protection. Any user who opens the browser can access the patients, encounters, and payments pages. Even if the API returns 401, the UI shows a blank list with no redirect to login. For a healthcare application, unauthenticated access to any page is a compliance violation.

**Tasks:**
- Create `apps/web/src/app/login/page.tsx` with an email/password form
- On successful login, store the `accessToken` in an httpOnly cookie (via a Next.js API route, not `localStorage`) and the `refreshToken` in a separate httpOnly cookie
- Create `apps/web/src/middleware.ts` using Next.js middleware to check for the auth cookie on all routes except `/login`; redirect to `/login` if missing
- Implement token refresh: if the access token is expired, use the refresh token to get a new one silently
- Create a `POST /api/auth/logout` Next.js API route that clears the cookies and redirects to `/login`

**Acceptance Criteria:**
- Navigating to `/patients` without being logged in redirects to `/login`
- Successful login redirects to `/` (dashboard)
- Tokens are stored in httpOnly cookies, not `localStorage` or `sessionStorage`
- After logout, navigating to any protected page redirects to `/login`
- Token refresh happens transparently without the user being logged out

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #46 Patient list page maps `patient.name` but API returns `firstName` and `lastName`

**Label:** 🐛 bug  
**Branch:** `fix/patient-interface-field-mapping`  
**Timeframe:** 3 hours

**Description:**
`patients/page.tsx` defines `interface Patient { id: string; name: string; dob: string }` and renders `patient.name` in the table. The API model returns `firstName`, `lastName`, `dateOfBirth`, `systemId`, and `sex`. The `name` and `dob` fields do not exist in the API response, so the table always renders empty cells for every patient.

**Tasks:**
- Update the `Patient` interface in `patients/page.tsx` to match the actual API response shape: `{ _id, systemId, firstName, lastName, dateOfBirth, sex, contactNumber, address, isActive }`
- Update the table columns to display `systemId`, `firstName + ' ' + lastName`, `dateOfBirth` (formatted), `sex`, `contactNumber`
- Move the `Patient` type to `packages/types/src/index.ts` so it is shared between the API and web app
- Add a `formatDate(isoString: string): string` utility in `apps/web/src/lib/utils.ts`

**Acceptance Criteria:**
- The patients table correctly displays `firstName`, `lastName`, and formatted `dateOfBirth` from the API response
- The `Patient` type is defined once in `packages/types` and imported in both the API and web app
- No TypeScript errors related to missing or mismatched fields
- `dateOfBirth` is displayed in a human-readable format (e.g. `20 Mar 1990`), not as a raw ISO string

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #47 No error boundary or meaningful error UI in web pages

**Label:** ✨ feature  
**Branch:** `feat/error-boundary-ui`  
**Timeframe:** 1 day

**Description:**
Fetch errors in all three pages are caught and logged to `console.error`, but the UI shows nothing — the page just renders an empty list with the stub text "No patients? API stub - implement CRUD." A user has no way to know whether the list is empty because there are no records or because an error occurred. There is also no React error boundary to catch rendering errors.

**Tasks:**
- Add an `error` state to each page alongside `loading` and `data` states
- Display a user-friendly error message when the fetch fails: `"Failed to load patients. Please try again."` with a retry button
- Create a reusable `ErrorMessage` component in `apps/web/src/components/ErrorMessage.tsx`
- Create a `ErrorBoundary` client component in `apps/web/src/components/ErrorBoundary.tsx` and wrap the root layout with it
- Remove all stub text like "No patients? API stub - implement CRUD." from the UI

**Acceptance Criteria:**
- When the API is unreachable, the page displays the `ErrorMessage` component with a retry button
- Clicking retry re-fetches the data
- A rendering error in any page is caught by the error boundary and shows a fallback UI instead of a blank screen
- No stub/placeholder text is visible to end users in any page

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #48 No form to create patients, encounters, or payments in the UI

**Label:** ✨ feature  
**Branch:** `feat/create-forms-patients-encounters`  
**Timeframe:** 5 days

**Description:**
All three pages only list data. There are no forms to create new records. A user cannot add a new patient, log an encounter, or initiate a payment from the web app. The application is read-only from the UI perspective, making it unusable as an EMR.

**Tasks:**
- Create `apps/web/src/components/forms/CreatePatientForm.tsx` with fields: `firstName`, `lastName`, `dateOfBirth`, `sex` (select), `contactNumber`, `address`
- Create `apps/web/src/components/forms/CreateEncounterForm.tsx` with fields: `patientId` (searchable select), `chiefComplaint`, `notes`
- Create `apps/web/src/components/forms/CreatePaymentIntentForm.tsx` with fields: `patientId`, `amount`
- Add client-side validation using `react-hook-form` + `zod` resolver, reusing schemas from `packages/types`
- Show success/error toast notifications after form submission
- Add a modal or slide-over panel to each list page to open the create form

**Acceptance Criteria:**
- Submitting the create patient form with valid data creates a patient and refreshes the list
- Submitting with invalid data (e.g. empty `firstName`) shows inline validation errors without making an API call
- Form submission shows a loading state on the submit button
- Success shows a toast notification and closes the form
- API errors (e.g. 409 duplicate) are displayed as form-level error messages

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #49 Navigation uses `<a>` tags — causes full page reloads

**Label:** 🐛 bug  
**Branch:** `fix/replace-anchor-with-next-link`  
**Timeframe:** 2 hours

**Description:**
`page.tsx` uses `<a href="/patients">`, `<a href="/encounters">`, and `<a href="/payments">` for navigation. These are plain HTML anchor tags that trigger full page reloads, bypassing Next.js client-side routing. This defeats the purpose of using Next.js and results in a slow, non-SPA navigation experience.

**Tasks:**
- Replace all `<a href="...">` navigation links with Next.js `<Link href="...">` components
- Create a `NavBar` component in `apps/web/src/components/NavBar.tsx` that uses `usePathname()` to highlight the active route
- Add the `NavBar` to `layout.tsx` so it appears on all pages
- Ensure the `NavBar` includes a logout button that calls the logout API route

**Acceptance Criteria:**
- Clicking navigation links does not trigger a full page reload (no network request for the HTML document)
- The active route is visually highlighted in the nav bar
- The `NavBar` is present on all pages except `/login`
- The logout button clears the session and redirects to `/login`

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #50 Payments page links to testnet explorer unconditionally

**Label:** 🐛 bug  
**Branch:** `fix/stellar-explorer-url-by-network`  
**Timeframe:** 2 hours

**Description:**
`payments/page.tsx` hardcodes `https://stellar.expert/explorer/testnet/tx/` in the transaction link. When the app is configured for mainnet (`STELLAR_NETWORK=mainnet`), this link points to the wrong explorer and the transaction will not be found. This is a silent bug that would confuse users in production.

**Tasks:**
- Add `NEXT_PUBLIC_STELLAR_NETWORK` to `.env.example` (values: `testnet` or `mainnet`)
- Create a utility `getStellarExplorerUrl(txHash: string, network: string): string` in `apps/web/src/lib/stellar.ts`
- Replace the hardcoded URL in `payments/page.tsx` with a call to this utility
- The utility should return `https://stellar.expert/explorer/testnet/tx/${hash}` for testnet and `https://stellar.expert/explorer/public/tx/${hash}` for mainnet

**Acceptance Criteria:**
- With `NEXT_PUBLIC_STELLAR_NETWORK=mainnet`, transaction links point to the mainnet explorer
- With `NEXT_PUBLIC_STELLAR_NETWORK=testnet`, transaction links point to the testnet explorer
- The utility is unit-tested for both network values
- No hardcoded explorer URLs remain in any component

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #51 No global state management or API data caching

**Label:** ✨ feature  
**Branch:** `feat/tanstack-query-integration`  
**Timeframe:** 2 days

**Description:**
Each page independently fetches data in a `useEffect` with no caching, deduplication, or shared state. Navigating between pages re-fetches data every time. There is no way to invalidate the cache after a mutation (e.g. creating a patient should refresh the patient list). This leads to stale data, unnecessary API calls, and a poor user experience.

**Tasks:**
- Install `@tanstack/react-query` (TanStack Query v5) in `apps/web`
- Create a `QueryClientProvider` wrapper in `apps/web/src/providers/QueryProvider.tsx` and add it to `layout.tsx`
- Replace all `useEffect` + `fetch` patterns with `useQuery` hooks
- Define query keys in a central `apps/web/src/lib/queryKeys.ts` file
- After successful form submissions (create/update/delete), call `queryClient.invalidateQueries()` to refresh the relevant list
- Add `staleTime: 30_000` (30 seconds) to avoid over-fetching

**Acceptance Criteria:**
- Navigating away from and back to the patients page does not re-fetch if data is less than 30 seconds old
- Creating a new patient automatically refreshes the patient list without a manual page reload
- Loading and error states are handled by TanStack Query's `isLoading` and `isError` flags
- No raw `useEffect` + `fetch` patterns remain in any page component

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #52 No search UI for patients and no patient detail page

**Label:** ✨ feature  
**Branch:** `feat/patient-search-ui-detail-page`  
**Timeframe:** 3 days

**Description:**
The API has `GET /patients/search?q=` and `GET /patients/:id` but the web UI has no search input and no way to view a patient's full details. Users can only see the paginated list. In a real EMR, searching for a patient and viewing their full record (including encounters and payment history) is the primary workflow.

**Tasks:**
- Add a debounced search input to `patients/page.tsx` that calls `GET /patients/search?q=` after 300ms of inactivity
- Create `apps/web/src/app/patients/[id]/page.tsx` as a patient detail page showing all patient fields, their encounter history, and payment history
- Add a "View" button/link in the patients table that navigates to `/patients/:id`
- The detail page should fetch patient, encounters, and payments in parallel using `Promise.all` or TanStack Query's `useQueries`

**Acceptance Criteria:**
- Typing in the search box filters the patient list in real time (debounced at 300ms)
- Clearing the search box returns to the full paginated list
- Clicking "View" on a patient navigates to `/patients/:id`
- The patient detail page displays all fields, encounter history, and payment history
- The detail page shows a loading skeleton while data is being fetched
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #53 No Content-Security-Policy on the Next.js web app

**Label:** 🔒 security  
**Branch:** `feat/csp-headers-nextjs`  
**Timeframe:** 1 day

**Description:**
The Next.js app has no CSP headers. Without CSP, any XSS vulnerability (e.g. in a third-party dependency or user-generated content) can execute arbitrary scripts, steal tokens from cookies, or exfiltrate patient data. For a healthcare application, CSP is a mandatory defence-in-depth control.

**Tasks:**
- Add a `headers()` function to `apps/web/next.config.js` that sets security headers on all routes
- Set `Content-Security-Policy` restricting: `default-src 'self'`, `script-src 'self'` (no `unsafe-inline`), `style-src 'self' 'unsafe-inline'` (required for Tailwind), `img-src 'self' data:`, `connect-src 'self' ${NEXT_PUBLIC_API_URL}`
- Set `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Test CSP with the browser's CSP evaluator and fix any violations
- Add CSP reporting endpoint (`report-uri`) for production monitoring

**Acceptance Criteria:**
- `curl -I http://localhost:3000` shows `Content-Security-Policy` header
- No CSP violations appear in the browser console during normal app usage
- `X-Frame-Options: DENY` prevents the app from being embedded in an iframe
- The CSP header is present on all pages including the login page
- CSP is documented in `SECURITY.md`
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #54 No `robots.txt` or `sitemap.xml` for the web app

**Label:** 🐛 bug  
**Branch:** `fix/robots-txt-noindex`  
**Timeframe:** 2 hours

**Description:**
The Next.js web app has no `robots.txt`. Search engines may index patient-facing pages, exposing the application's URL structure and potentially sensitive route patterns. For a healthcare application, all pages should be blocked from search engine indexing.

**Tasks:**
- Create `apps/web/public/robots.txt` with `User-agent: * \n Disallow: /` to block all crawlers
- Add a `<meta name="robots" content="noindex, nofollow">` tag to `layout.tsx` as a belt-and-suspenders measure
- If a public marketing page is added in the future, create a `sitemap.xml` for only that page
- Document the robots policy in `SECURITY.md`

**Acceptance Criteria:**
- `GET /robots.txt` returns `User-agent: * \n Disallow: /`
- All pages include `<meta name="robots" content="noindex, nofollow">`
- No patient-facing pages are indexed by search engines
- The robots policy is documented
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #55 No internationalisation (i18n) support

**Label:** ✨ feature  
**Branch:** `feat/i18n-internationalisation`  
**Timeframe:** 3 days

**Description:**
All user-facing strings in the web app are hardcoded in English. Error messages from the API are also English-only. For a healthcare application that may serve non-English-speaking patients and clinicians, i18n support is essential for accessibility and usability.

**Tasks:**
- Install `next-intl` in `apps/web`
- Create locale files: `apps/web/src/messages/en.json` and `apps/web/src/messages/fr.json` (French as a second language example)
- Extract all hardcoded UI strings into the locale files
- Add a language switcher component to the `NavBar`
- Store the user's preferred language in their profile (`UserModel.preferredLanguage`)
- Return API error messages in the user's preferred language by reading the `Accept-Language` header

**Acceptance Criteria:**
- Switching to French in the UI displays all labels, buttons, and messages in French
- The selected language persists across page refreshes (stored in a cookie)
- API error messages respect the `Accept-Language` header
- All new UI strings are added to both locale files (enforced by a lint rule)
- `npm run build` succeeds with i18n configured
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #56 No accessibility (a11y) compliance

**Label:** ✨ feature  
**Branch:** `feat/accessibility-a11y-compliance`  
**Timeframe:** 3 days

**Description:**
The web app has no accessibility considerations. There are no ARIA labels, no keyboard navigation support, no screen reader support, and no focus management. For a healthcare application used by clinical staff (who may have disabilities) and potentially patients, WCAG 2.1 AA compliance is both a legal requirement (ADA, Section 508) and an ethical obligation.

**Tasks:**
- Install `eslint-plugin-jsx-a11y` and add it to the ESLint config for `apps/web`
- Fix all existing a11y lint errors
- Add `aria-label` attributes to all icon buttons and interactive elements without visible text
- Ensure all form inputs have associated `<label>` elements
- Add `role` and `aria-*` attributes to the data tables
- Implement keyboard navigation for modals and dropdowns (focus trap, Escape to close)
- Run `axe-core` accessibility audit and fix all critical and serious violations
- Add `@axe-core/react` in development mode to surface a11y issues in the browser console

**Acceptance Criteria:**
- `eslint-plugin-jsx-a11y` reports zero errors across all components
- All form inputs have associated labels
- All interactive elements are reachable and operable via keyboard alone
- `axe-core` audit reports zero critical or serious violations
- Color contrast ratio meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #57 No mobile responsiveness

**Label:** ✨ feature  
**Branch:** `feat/mobile-responsive-layout`  
**Timeframe:** 3 days

**Description:**
All pages use fixed pixel widths and desktop-oriented layouts. The web app is unusable on mobile devices. Clinical staff often use tablets or phones at the point of care. A non-responsive EMR forces staff to use desktop computers, reducing efficiency and increasing errors.

**Tasks:**
- Audit all pages for fixed-width layouts and replace with responsive Tailwind classes (`sm:`, `md:`, `lg:` breakpoints)
- Make the data tables horizontally scrollable on small screens or switch to a card-based layout on mobile
- Make the `NavBar` collapse into a hamburger menu on small screens
- Test all pages on viewport widths: 375px (iPhone SE), 768px (iPad), 1280px (desktop)
- Add a `<meta name="viewport" content="width=device-width, initial-scale=1">` tag to `layout.tsx`

**Acceptance Criteria:**
- All pages are usable on a 375px wide viewport without horizontal scrolling of the page
- The `NavBar` collapses to a hamburger menu on screens narrower than 768px
- Data tables are horizontally scrollable on mobile
- No fixed pixel widths remain in any component (use Tailwind's responsive utilities)
- Lighthouse mobile score is ≥ 80
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.



---

## INFRASTRUCTURE & DEVOPS

---

### #58 No test suite — zero test coverage across the entire codebase

**Label:** ✨ feature  
**Branch:** `feat/test-suite-setup`  
**Timeframe:** 5 days

**Description:**
There are zero test files anywhere in the monorepo. No unit tests, no integration tests, no end-to-end tests. The CI pipeline has no test step. This means every code change is deployed with no automated safety net. For a healthcare application handling patient data and financial transactions, this is unacceptable. Regressions in auth, payment processing, or data access controls could go undetected.

**Tasks:**
- Install `jest`, `ts-jest`, `supertest`, `@types/jest`, `@types/supertest` in the API package
- Configure `jest.config.ts` at the monorepo root and per-package
- Write unit tests for:
  - `token.service.ts`: sign, verify, expiry, wrong secret
  - `validate.middleware.ts`: valid schema passes, invalid schema returns 400
  - `rbac.middleware.ts`: correct role passes, wrong role returns 403
- Write integration tests using `supertest` + an in-memory MongoDB (`mongodb-memory-server`) for:
  - `POST /auth/login`: success, wrong password, inactive user
  - `POST /auth/register`: success, duplicate email
  - `POST /patients`: success, missing fields, unauthorized
- Add `"test": "jest"` script to `apps/api/package.json`
- Add `test` task to `turbo.json`
- Add `npm run test` step to CI workflow

**Acceptance Criteria:**
- `npm run test` runs and passes with no errors
- Code coverage for `token.service.ts` and `validate.middleware.ts` is ≥ 90%
- CI fails if any test fails
- Integration tests use an in-memory DB, not the real MongoDB instance
- Test files are co-located with source files (`*.test.ts` or `__tests__/` directories)

---

### #59 CI pipeline has no test step and only runs on `main`

**Label:** ✨ feature  
**Branch:** `feat/ci-test-step-all-branches`  
**Timeframe:** 1 day

**Description:**
`.github/workflows/ci.yml` only runs `npm install`, `npm run build`, and `npm run lint`. There is no `npm run test` step. Additionally, CI only triggers on pushes and PRs to `main`. Feature branches have zero CI coverage — broken code can be pushed to any branch without detection until it reaches `main`.

**Tasks:**
- Add `- run: npm run test` step to the CI workflow after `npm run lint`
- Change the trigger to run on all pull requests regardless of target branch: `on: pull_request: branches: ['**']`
- Add a `NODE_ENV: test` environment variable to the CI job
- Add all required env vars as GitHub Actions secrets and reference them in the workflow
- Add a separate `security` job that runs `npm audit --audit-level=high` and fails on high/critical vulnerabilities
- Add branch protection rules documentation in `CONTRIBUTING.md`

**Acceptance Criteria:**
- Opening a PR to any branch triggers the CI workflow
- A failing test causes the CI check to fail and blocks the PR merge
- `npm audit` with high-severity vulnerabilities fails the CI build
- All required env vars are available in the CI environment via GitHub secrets
- The CI badge is added to `README.md`

---

### #60 No Docker / containerization — no reproducible deployment environment

**Label:** ✨ feature  
**Branch:** `feat/docker-containerization`  
**Timeframe:** 3 days

**Description:**
No `Dockerfile` or `docker-compose.yml` exists. Local setup requires manually installing MongoDB, configuring ports, and running three separate processes. There is no way to reproduce the production environment locally, and no standard deployment artifact. This makes onboarding new developers slow and production deployments inconsistent.

**Tasks:**
- Create `apps/api/Dockerfile` using a multi-stage build: `builder` stage compiles TypeScript, `runner` stage uses `node:18-alpine` with only production deps
- Create `apps/stellar-service/Dockerfile` with the same multi-stage pattern
- Create `apps/web/Dockerfile` using `node:18-alpine` with `next build` and `next start`
- Create `docker-compose.yml` at the root wiring up: `api` (port 3001), `web` (port 3000), `stellar-service` (port 3002), `mongodb` (port 27017)
- Add a `docker-compose.override.yml` for development with volume mounts for hot reload
- Add `.dockerignore` files to each app
- Document Docker usage in `README.md`

**Acceptance Criteria:**
- `docker-compose up` starts all four services successfully
- The web app at `http://localhost:3000` can communicate with the API at `http://localhost:3001`
- MongoDB data persists across container restarts via a named volume
- Production Docker images are under 200MB
- No secrets are baked into Docker images; all config comes from env vars

---

### #61 No secrets management — secrets only in `.env` files

**Label:** ✨ feature  
**Branch:** `feat/secrets-management-policy`  
**Timeframe:** 2 days

**Description:**
Neither `app.ts` nor `stellar-service` handle `SIGTERM` or `SIGINT` signals. When a container orchestrator (Kubernetes, ECS) sends `SIGTERM` to deploy a new version, the process exits immediately, dropping all in-flight HTTP requests and leaving MongoDB connections open. This causes errors for users mid-request and can corrupt in-progress Stellar transactions.

**Tasks:**
- Add `process.on('SIGTERM', shutdown)` and `process.on('SIGINT', shutdown)` in both `app.ts` and stellar-service
- The `shutdown` function must: stop accepting new connections (`server.close()`), wait for in-flight requests to complete (with a 10-second timeout), close the Mongoose connection (`mongoose.connection.close()`), then exit with code 0
- Log each step of the shutdown sequence
- Add a `SHUTDOWN_TIMEOUT_MS` env var (default: 10000)

**Acceptance Criteria:**
- Sending `SIGTERM` to the API process logs `Shutting down gracefully...` and exits cleanly
- In-flight requests complete before the process exits (within the timeout)
- MongoDB connection is closed before process exit (no "topology was destroyed" errors)
- Process exits with code 0 on clean shutdown, code 1 on forced timeout

---

### #62 `.gitignore` is minimal — build artifacts and sensitive files may be committed

**Label:** 🔧 chore  
**Branch:** `fix/expand-gitignore`  
**Timeframe:** 2 hours

**Description:**
The `.gitignore` file is only 42 bytes. It almost certainly does not cover all build artifacts, OS-specific files, editor files, and sensitive files. The `.next/` build directory, `dist/` folders, `.turbo/` cache, and `.env` files may all be tracked by git, bloating the repository and potentially exposing sensitive data.

**Tasks:**
- Replace the minimal `.gitignore` with a comprehensive one covering:
  - `node_modules/`, `dist/`, `.next/`, `.turbo/`, `*.tsbuildinfo`
  - `.env`, `.env.local`, `.env.*.local`, `.env.production`
  - OS files: `.DS_Store`, `Thumbs.db`, `desktop.ini`
  - Editor files: `.vscode/`, `.idea/`, `*.swp`, `*.swo`
  - Test artifacts: `coverage/`, `junit.xml`
  - Log files: `*.log`, `npm-debug.log*`
- Run `git rm --cached` for any currently tracked files that should be ignored
- Add a `.gitignore` check to the CI pipeline

**Acceptance Criteria:**
- `git status` shows no untracked `.env` files, `dist/` directories, or `.next/` directories
- `node_modules/` is not tracked in git
- OS and editor files are ignored
- The CI pipeline fails if a `.env` file is accidentally committed

---

### #63 No database seeding script for development

**Label:** ✨ feature  
**Branch:** `feat/database-seed-script`  
**Timeframe:** 1 day

**Description:**
There is no seed script to populate the database with test data. Every developer who sets up the project must manually create a clinic, a user, and test patients via API calls before they can use the application. This slows onboarding and makes it impossible to have a consistent development dataset.

**Tasks:**
- Create `scripts/seed.ts` that creates: 1 clinic, 1 SUPER_ADMIN user, 1 CLINIC_ADMIN user, 1 DOCTOR user, 10 sample patients, 5 sample encounters, 3 sample payment records
- Add `"seed": "ts-node scripts/seed.ts"` to the root `package.json` scripts
- The seed script must be idempotent — running it twice does not create duplicates (use `upsert`)
- Add seed credentials to `.env.example` comments so developers know the default login
- Document the seed script in `README.md`

**Acceptance Criteria:**
- `npm run seed` runs without errors on a fresh database
- Running `npm run seed` twice does not create duplicate records
- After seeding, `POST /auth/login` with the seed credentials returns a valid token
- The seed creates enough data to demonstrate all UI pages with real content
- Seed script is excluded from production builds

---

### #64 No database backup strategy documented

**Label:** ✨ feature  
**Branch:** `feat/database-backup-strategy`  
**Timeframe:** 2 days

**Description:**
There is no documentation or automation for MongoDB backups. For a healthcare application storing patient records, data loss is a HIPAA violation and a patient safety issue. Without backups, a single disk failure or accidental `db.dropDatabase()` would be catastrophic and unrecoverable.

**Tasks:**
- Document the backup strategy in `DEPLOYMENT.md`: daily automated backups, 30-day retention, encrypted at rest
- Create a `scripts/backup.sh` script that uses `mongodump` to create a compressed, timestamped backup
- Add a cron job configuration (or GitHub Actions scheduled workflow) that runs the backup script daily
- Document the restore procedure using `mongorestore`
- If using MongoDB Atlas, document how to enable continuous backups in the Atlas UI
- Add backup verification: a weekly test restore to a separate instance

**Acceptance Criteria:**
- `scripts/backup.sh` creates a compressed backup file named `backup-YYYY-MM-DD.tar.gz`
- The backup script is documented in `DEPLOYMENT.md`
- The restore procedure is documented and tested
- Backup files are stored in a separate location from the primary database (e.g. S3)
- The CI pipeline does not run the backup script (it is a production-only operation)

---

### #65 `turbo` and `typescript` pinned to `latest` — non-deterministic builds

**Label:** 🔧 chore  
**Branch:** `fix/pin-dependency-versions`  
**Timeframe:** 3 hours

**Description:**
`package.json` uses `"turbo": "latest"` and multiple packages use `"typescript": "latest"`. These will resolve to different versions on different machines and at different times. A new major version of either tool can introduce breaking changes that silently break the build for some developers but not others, making bugs extremely hard to reproduce.

**Tasks:**
- Pin `turbo` to a specific version (e.g. `2.x.x`) in root `package.json`
- Pin `typescript` to a specific version (e.g. `5.4.5`) in all `package.json` files across the monorepo
- Pin all other `devDependencies` that use `latest` or `^` ranges to exact versions
- Run `npm install` after pinning to update `package-lock.json`
- Add a comment in root `package.json` documenting the pinning policy

**Acceptance Criteria:**
- No `"latest"` version specifiers remain in any `package.json` in the monorepo
- `npm ci` produces the exact same dependency tree on any machine
- `package-lock.json` is committed and up to date
- Upgrading a dependency requires an explicit version bump in `package.json`

---

### #66 No `.nvmrc` or Node.js version enforcement

**Label:** 🔧 chore  
**Branch:** `fix/nvmrc-node-version-enforcement`  
**Timeframe:** 2 hours

**Description:**
CI uses Node 18 but there is no `.nvmrc`, `.node-version`, or `engines` field to enforce this for local development. A developer using Node 16 or Node 20 may encounter subtle differences in behavior (e.g. native `fetch` availability, crypto API differences) that are hard to debug.

**Tasks:**
- Create `.nvmrc` at the monorepo root containing `18`
- Add `"engines": { "node": ">=18.0.0", "npm": ">=9.0.0" }` to root `package.json`
- Add `"engine-strict": true` to `.npmrc` so npm refuses to install on unsupported Node versions
- Update `README.md` with the required Node version and a link to nvm installation instructions
- Update CI to use the exact same Node version specified in `.nvmrc`

**Acceptance Criteria:**
- Running `nvm use` in the project root switches to Node 18
- Running `npm install` on Node 16 prints an error and exits
- CI uses the Node version from `.nvmrc` (via `actions/setup-node` with `node-version-file: '.nvmrc'`)
- `README.md` documents the Node version requirement

---

### #67 No ESLint configuration — linting is effectively disabled

**Label:** 🔧 chore  
**Branch:** `feat/eslint-configuration`  
**Timeframe:** 1 day

**Description:**
`npm run lint` runs `eslint src` in the API package but there is no `.eslintrc`, `eslint.config.js`, or `eslintConfig` in any `package.json`. ESLint will use its defaults, which catch almost nothing. Security issues, unused variables, `any` types, and `console.log` calls all pass without warning. The lint step in CI is a false sense of security.

**Tasks:**
- Create `packages/config/eslint-config/index.js` as a shared ESLint config
- Include: `@typescript-eslint/recommended`, `@typescript-eslint/recommended-requiring-type-checking`, `eslint-plugin-security`, `no-console` (error in production), `no-unused-vars` (error)
- Add `eslint.config.js` (or `.eslintrc.js`) to `apps/api`, `apps/web`, and `apps/stellar-service` extending the shared config
- Add `eslint-plugin-security` to catch common security anti-patterns
- Fix all existing lint errors before merging
- Add `lint` script to all packages that don't have one

**Acceptance Criteria:**
- `npm run lint` from the root runs ESLint across all packages and reports errors
- `console.log` in `src/` files causes a lint error
- `any` type usage causes a lint warning
- `eslint-plugin-security` flags insecure patterns (e.g. `eval`, `child_process.exec` with user input)
- CI fails if lint errors are present

---

### #68 No Prettier configuration — inconsistent code formatting

**Label:** 🔧 chore  
**Branch:** `feat/prettier-precommit-hooks`  
**Timeframe:** 3 hours

**Description:**
No `.prettierrc` exists. Code style is inconsistent across files — mixed single and double quotes, inconsistent semicolons, varying indentation. This creates noisy diffs in PRs where formatting changes are mixed with logic changes, making code review harder.

**Tasks:**
- Create `.prettierrc` at the monorepo root: `{ "singleQuote": true, "semi": true, "tabWidth": 2, "trailingComma": "all", "printWidth": 100 }`
- Add `prettier` as a root `devDependency`
- Add `"format": "prettier --write \"**/*.{ts,tsx,json,md}\""` and `"format:check": "prettier --check \"**/*.{ts,tsx,json,md}\""` scripts to root `package.json`
- Install `husky` and `lint-staged`; configure a pre-commit hook that runs `prettier --write` on staged files
- Add `format:check` to the CI pipeline to fail on unformatted code

**Acceptance Criteria:**
- `npm run format` reformats all files consistently
- `npm run format:check` passes on a freshly formatted codebase
- Committing an unformatted file triggers the pre-commit hook and auto-formats it
- CI fails if `format:check` finds unformatted files
- All existing files are formatted before the first PR using this config

---

### #69 No `pre-commit` hooks — broken code can be committed

**Label:** 🔧 chore  
**Branch:** `feat/precommit-hooks-husky`  
**Timeframe:** 3 hours

**Description:**
There are no git hooks to prevent committing broken code. A developer can commit TypeScript errors, failing tests, unformatted code, or accidentally staged `.env` files. Pre-commit hooks are the last line of defence before code enters the repository.

**Tasks:**
- Install `husky` and `lint-staged` as root `devDependencies`
- Run `npx husky init` to set up the `.husky/` directory
- Configure `lint-staged` in root `package.json` to run on staged files:
  - `*.{ts,tsx}`: `eslint --fix` then `prettier --write`
  - `*.{json,md}`: `prettier --write`
- Add a `pre-commit` hook that runs `lint-staged`
- Add a `commit-msg` hook that validates commit messages follow Conventional Commits format (using `commitlint`)
- Add a secret-scanning hook using `detect-secrets` or `gitleaks`

**Acceptance Criteria:**
- Committing a file with an ESLint error is blocked by the pre-commit hook
- Committing an unformatted file auto-formats it and includes the formatted version in the commit
- A commit message like `fixed stuff` is rejected; `fix: resolve patient search ReDoS vulnerability` is accepted
- Committing a file containing a string matching a secret pattern (e.g. `AKIA...` for AWS keys) is blocked
- `husky` hooks are installed automatically after `npm install` via the `prepare` script

---

### #70 No `CODEOWNERS` file — no automatic PR review assignment

**Label:** 🔧 chore  
**Branch:** `feat/codeowners-pr-template`  
**Timeframe:** 3 hours

**Description:**
There is no `CODEOWNERS` file. Pull requests have no automatic reviewer assignment. Critical files (security middleware, payment processing, auth) can be merged without review from the appropriate team members.

**Tasks:**
- Create `.github/CODEOWNERS` assigning reviewers to critical paths:
  - `apps/api/src/middlewares/` — security team
  - `apps/api/src/modules/auth/` — security team
  - `apps/api/src/modules/payments/` — payments team
  - `apps/stellar-service/` — payments team
  - `packages/config/` — platform team
- Create `.github/pull_request_template.md` with a checklist: description of changes, linked issue, tests added, security implications considered, breaking changes noted
- Enable branch protection on `main`: require 1 approving review, require CI to pass, require up-to-date branch

**Acceptance Criteria:**
- Opening a PR that modifies `apps/api/src/modules/auth/` automatically requests review from the security team
- The PR template is shown when opening a new PR
- Direct pushes to `main` are blocked (branch protection enabled)
- PRs cannot be merged without at least 1 approving review and passing CI

---

### #71 No `dependabot` configuration — dependencies never automatically updated

**Label:** 🔧 chore  
**Branch:** `feat/dependabot-configuration`  
**Timeframe:** 2 hours

**Description:**
There is no Dependabot configuration. Security vulnerabilities in dependencies (e.g. a critical CVE in `express`, `jsonwebtoken`, or `mongoose`) will not be automatically flagged or patched. For a healthcare application, unpatched dependencies are a compliance risk.

**Tasks:**
- Create `.github/dependabot.yml` configuring weekly dependency updates for:
  - `npm` packages in the root and all workspaces
  - GitHub Actions in `.github/workflows/`
- Set `open-pull-requests-limit: 10` to avoid PR flooding
- Configure `ignore` rules for major version bumps that require manual review
- Add `assignees` and `reviewers` to Dependabot PRs
- Enable GitHub's automated security alerts and secret scanning in the repository settings

**Acceptance Criteria:**
- Dependabot opens PRs weekly for outdated npm packages
- Dependabot opens PRs for outdated GitHub Actions
- Security vulnerability PRs are opened immediately (not waiting for the weekly schedule)
- Dependabot PRs are assigned to the appropriate reviewer
- GitHub secret scanning is enabled and alerts are sent to the security team

---

### #72 Turbo `test` task missing from `turbo.json`

**Label:** 🔧 chore  
**Branch:** `fix/turbo-test-task`  
**Timeframe:** 2 hours

**Description:**
`turbo.json` defines `build`, `dev`, `lint`, and `start` tasks but no `test` task. When tests are added (Issue #27), running `turbo run test` will fail because Turbo has no configuration for it. Without a Turbo test task, test caching and parallel execution across packages won't work.

**Tasks:**
- Add a `test` task to `turbo.json`:
  ```json
  "test": {
    "dependsOn": ["^build"],
    "outputs": ["coverage/**"],
    "cache": true
  }
  ```
- Add `"test": "jest --coverage"` scripts to `apps/api/package.json` and any other testable packages
- Verify `turbo run test` executes tests across all packages
- Add `coverage/` to `.gitignore`

**Acceptance Criteria:**
- `turbo run test` runs tests in all packages that have a `test` script
- Test results are cached by Turbo — re-running without code changes uses the cache
- `coverage/` directories are generated and ignored by git
- CI uses `turbo run test` rather than per-package test commands

---

### #73 No `package.json` `description` or `repository` fields

**Label:** 🔧 chore  
**Branch:** `fix/package-json-metadata-license`  
**Timeframe:** 2 hours

**Description:**
Root and workspace `package.json` files are missing `description`, `repository`, `license`, `author`, and `keywords` fields. These are important for: npm publishing (if packages are ever published), GitHub repository metadata, and legal clarity around the open-source license.

**Tasks:**
- Add to root `package.json`: `"description"`, `"license": "MIT"` (or appropriate license), `"author"`, `"repository": { "type": "git", "url": "..." }`
- Add `description` and `license` to each workspace `package.json`
- Create a `LICENSE` file at the repository root with the full license text
- Add a license header comment to all source files (or use a lint rule to enforce it)

**Acceptance Criteria:**
- Root `package.json` has `description`, `license`, `author`, and `repository` fields
- A `LICENSE` file exists at the repository root
- All workspace packages have a `license` field matching the root
- `npm publish --dry-run` (if applicable) does not warn about missing metadata

---

### #74 No `tsconfig` path aliases — long relative imports throughout

**Label:** 🔧 chore  
**Branch:** `feat/tsconfig-path-aliases`  
**Timeframe:** 3 hours

**Description:**
TypeScript files use long relative imports like `../../middlewares/auth.middleware`. As the codebase grows, these become hard to read and break when files are moved. Path aliases (e.g. `@/middlewares/auth.middleware`) make imports cleaner and refactoring safer.

**Tasks:**
- Add path aliases to `tsconfig.base.json`: `"@api/*": ["apps/api/src/*"]`, `"@web/*": ["apps/web/src/*"]`
- Update each app's `tsconfig.json` to extend `tsconfig.base.json` and add app-specific aliases
- For `apps/web`, also configure the aliases in `next.config.js` using `webpack.resolve.alias`
- Replace all relative imports deeper than 2 levels with alias imports
- Verify `npm run build` passes after the change

**Acceptance Criteria:**
- `import { authenticate } from '@api/middlewares/auth.middleware'` resolves correctly
- No relative import goes more than 2 directory levels deep (`../../`)
- `npm run build` passes for all packages
- VS Code IntelliSense resolves the aliases correctly

---

### #75 No monitoring or alerting setup

**Label:** ✨ feature  
**Branch:** `feat/monitoring-sentry-integration`  
**Timeframe:** 2 days

**Description:**
There is no error tracking, performance monitoring, or uptime alerting. In production, if the API starts returning 500 errors or the Stellar service goes down, there is no automated notification. For a healthcare application, downtime directly impacts patient care.

**Tasks:**
- Integrate Sentry for error tracking in both the API and web app: `@sentry/node` for the API, `@sentry/nextjs` for the web
- Add `SENTRY_DSN` to `.env.example`
- Configure Sentry to capture unhandled exceptions and promise rejections
- Add performance monitoring: track response times for all API endpoints
- Set up an uptime monitor (e.g. UptimeRobot or GitHub Actions scheduled ping) for the `/health` endpoint
- Document the monitoring setup in `DEPLOYMENT.md`
- Add alerting rules: alert if error rate exceeds 1% or p95 response time exceeds 2 seconds

**Acceptance Criteria:**
- Unhandled exceptions in the API are captured in Sentry with full stack traces
- Frontend errors are captured in Sentry with user context (anonymised, no PHI)
- The `/health` endpoint is monitored and alerts fire within 5 minutes of downtime
- `SENTRY_DSN` is in `.env.example` with instructions
- PHI is never sent to Sentry (scrub patient names, IDs from error context)

---

### #76 No performance testing or load testing

**Label:** ✨ feature  
**Branch:** `feat/load-performance-testing`  
**Timeframe:** 3 days

**Description:**
There is no load testing to understand how the API performs under realistic clinical load. A clinic with 50 concurrent users could overwhelm the API if it has N+1 query problems, missing indexes, or insufficient connection pooling. Performance regressions can go undetected until production.

**Tasks:**
- Install `k6` (or `artillery`) and create `tests/load/patients.js` simulating 50 concurrent users performing patient search and list operations for 60 seconds
- Define performance budgets: p95 response time < 500ms, error rate < 0.1%, throughput > 100 req/s
- Add a `test:load` script to `package.json`
- Run the load test against a staging environment as part of the release process
- Document the performance baselines in `DEPLOYMENT.md`
- Fix any performance issues discovered (likely: missing indexes, N+1 queries)

**Acceptance Criteria:**
- `npm run test:load` runs the k6 load test and outputs a summary
- The API meets the defined performance budgets under 50 concurrent users
- Load test results are saved as artifacts in CI
- Any endpoint with p95 > 500ms has a documented optimization plan
- The load test is run before every production release

---

### #77 No `CONTRIBUTING.md` — no onboarding guide for new developers

**Label:** 📄 documentation  
**Branch:** `docs/contributing-guide`  
**Timeframe:** 1 day

**Description:**
`README.md` references `CONTRIBUTING.md` as "TBD". New contributors have no guide for setting up the development environment, branching strategy, commit message conventions, or PR process. This leads to inconsistent contributions and slows down code review.

**Tasks:**
- Create `CONTRIBUTING.md` covering:
  - Prerequisites (Node 18, MongoDB, nvm)
  - Local setup steps (clone, `npm install`, copy `.env.example`, `npm run seed`, `npm run dev`)
  - Branching strategy: `main` (production), `develop` (staging), `feature/issue-number-description`
  - Commit message format: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`)
  - PR process: link to issue, description of changes, screenshots for UI changes, test coverage requirement
  - Code review checklist: no secrets, no `console.log`, tests added, types correct
  - How to run tests, linting, and formatting

**Acceptance Criteria:**
- A new developer can set up the project from scratch following only `CONTRIBUTING.md`
- The branching strategy is clearly defined
- Commit message format is documented with examples
- The PR checklist is actionable and specific
- `README.md` links to `CONTRIBUTING.md`

---

### #78 No `SECURITY.md` — no security policy or vulnerability reporting process

**Label:** 📄 documentation  
**Branch:** `docs/security-policy`  
**Timeframe:** 1 day

**Description:**
There is no `SECURITY.md` file. GitHub uses this file to display security policy information and to provide a private channel for reporting vulnerabilities. For a healthcare application, having a clear security policy and responsible disclosure process is essential for compliance and trust.

**Tasks:**
- Create `SECURITY.md` covering:
  - Supported versions (which versions receive security patches)
  - How to report a vulnerability (private email or GitHub private vulnerability reporting)
  - Response timeline (acknowledge within 48 hours, patch within 14 days for critical)
  - Security controls implemented (CORS, rate limiting, helmet, input sanitization, encryption)
  - HIPAA compliance status and controls
  - Data retention and deletion policy
  - Incident response procedure

**Acceptance Criteria:**
- `SECURITY.md` exists at the repository root
- GitHub's "Security" tab shows the security policy
- The vulnerability reporting channel is a private email or GitHub's private reporting feature (not a public issue)
- HIPAA controls are documented
- The file is reviewed and updated with each major release

---

### #79 No `DEPLOYMENT.md` — no production deployment guide

**Label:** 📄 documentation  
**Branch:** `docs/deployment-guide`  
**Timeframe:** 2 days

**Description:**
There is no documentation on how to deploy the application to production. `npm run build` exists but there is no guidance on environment setup, database provisioning, SSL termination, reverse proxy configuration, or monitoring setup. A new DevOps engineer has no starting point.

**Tasks:**
- Create `DEPLOYMENT.md` covering:
  - Prerequisites: Node 18, MongoDB 6+, a Stellar testnet/mainnet account
  - Environment variables: full list with descriptions and example values
  - Build steps: `npm ci`, `npm run build`, `npm run start`
  - Docker deployment: `docker-compose up -d` (references Issue #29)
  - Database setup: connection string format, recommended MongoDB Atlas tier
  - Reverse proxy: Nginx config example for SSL termination and proxying to the API and web app
  - Health checks: endpoints to monitor (`/health` on API, `/health` on stellar-service)
  - Monitoring: recommended tools (Datadog, Sentry, UptimeRobot)
  - Rollback procedure

**Acceptance Criteria:**
- A DevOps engineer with no prior knowledge of the project can deploy it to production following `DEPLOYMENT.md`
- All required env vars are listed with descriptions
- The Nginx config example is valid and tested
- Health check endpoints are documented
- The rollback procedure is clear and actionable

---

### #80 No `CHANGELOG.md` or versioning strategy

**Label:** 📄 documentation  
**Branch:** `docs/changelog-versioning-strategy`  
**Timeframe:** 1 day

**Description:**
There is no changelog and no semantic versioning strategy. When a bug is fixed or a feature is added, there is no record of what changed between versions. For a healthcare application, change tracking is important for compliance audits and for communicating breaking changes to API consumers.

**Tasks:**
- Create `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com) format
- Add an initial entry for `v0.1.0` documenting the current scaffold state
- Adopt Conventional Commits (`feat:`, `fix:`, `chore:`, `BREAKING CHANGE:`) as the commit message standard
- Install `@changesets/cli` (or `semantic-release`) for automated changelog generation and version bumping
- Add a `changeset` step to the PR process in `CONTRIBUTING.md`
- Add a GitHub Actions workflow that creates a release and updates `CHANGELOG.md` on merge to `main`

**Acceptance Criteria:**
- `CHANGELOG.md` exists and follows the Keep a Changelog format
- A new entry is added to `CHANGELOG.md` for every PR that changes user-facing behaviour
- `npm run release` (or equivalent) bumps the version and updates the changelog automatically
- GitHub Releases are created automatically on merge to `main`
- The versioning strategy is documented in `CONTRIBUTING.md`

---

### #81 No `README` badges or project status indicators

**Label:** 📄 documentation  
**Branch:** `fix/readme-badges-cleanup`  
**Timeframe:** 3 hours

**Description:**
The `README.md` has no CI status badge, no test coverage badge, no license badge, and no version badge. These are standard indicators of project health that help contributors and evaluators quickly assess the project's status. The README also still contains scaffold-era language ("10% implementation") that should be updated as features are completed.

**Tasks:**
- Add a CI status badge linking to the GitHub Actions workflow
- Add a test coverage badge (from Codecov or Coveralls, integrated with the CI pipeline)
- Add a license badge
- Add a `node` version badge
- Remove all references to "10% implementation" and "scaffold" from `README.md`
- Update the README to reflect the actual implemented features as issues are resolved
- Add a "Getting Started" section with a 5-minute quickstart using Docker Compose

**Acceptance Criteria:**
- `README.md` displays a green CI badge when the main branch is passing
- The coverage badge shows the current test coverage percentage
- No "scaffold" or "10% implementation" language remains in `README.md`
- The Docker Compose quickstart works end-to-end in under 5 minutes
- All badges link to the correct URLs


---

## SECURITY & COMPLIANCE

---

### #82 No HIPAA audit logging for PHI access

**Label:** 🔒 security  
**Branch:** `feat/hipaa-audit-logging`  
**Timeframe:** 5 days

**Description:**
Refresh tokens are stateless JWTs signed with a secret. Once issued, they cannot be invalidated before their 7-day expiry. If a refresh token is stolen (e.g. via XSS, log exposure, or a compromised device), an attacker can silently obtain new access tokens for 7 days with no way to stop them. There is also no logout endpoint to invalidate tokens server-side.

**Tasks:**
- Add a `refreshTokenHash` field to `UserModel` (hashed with SHA-256, not bcrypt, for speed)
- On `POST /auth/refresh`: verify the incoming token, check its hash matches the stored one, issue a new access token AND a new refresh token, store the new hash, invalidate the old one
- Implement `POST /api/v1/auth/logout` that clears `refreshTokenHash` from the user document
- On login, store the new refresh token hash
- If a refresh token is reused after rotation (hash mismatch), treat it as a token theft: clear all tokens and return `401`

**Acceptance Criteria:**
- After `POST /auth/logout`, using the old refresh token returns `401`
- After `POST /auth/refresh`, the old refresh token is rejected on a second use
- Reuse of a rotated refresh token clears the stored hash and returns `401`
- `UserModel` has a `refreshTokenHash` field that is `select: false`
- Logout endpoint returns `200 { status: 'success' }`

---

### #83 JWT tokens not validated for `iss` or `aud` claims

**Label:** 🔒 security  
**Branch:** `fix/jwt-iss-aud-claims`  
**Timeframe:** 3 hours

**Description:**
`token.service.ts` signs JWTs without `issuer` or `audience` claims. If another service in the same infrastructure uses JWTs signed with the same secret (or if the secret is reused), tokens from that service could be accepted by this API. This is a token confusion attack vector. For a healthcare API, token validation must be strict.

**Tasks:**
- Add `issuer: 'health-watchers-api'` and `audience: 'health-watchers-client'` to `jwt.sign()` options in `signAccessToken` and `signRefreshToken`
- Add `issuer` and `audience` verification to `jwt.verify()` calls in `verifyAccessToken` and `verifyRefreshToken`
- Add `STELLAR_SERVICE_JWT_AUDIENCE` for service-to-service tokens if applicable
- Add `JWT_ISSUER` and `JWT_AUDIENCE` to `.env.example` and config
- Update all token verification calls to pass the `issuer` and `audience` options

**Acceptance Criteria:**
- A token signed without `iss: 'health-watchers-api'` is rejected by `verifyAccessToken`
- A token signed with the correct secret but wrong `aud` is rejected
- `jwt.sign()` calls include both `issuer` and `audience` options
- Unit tests cover the rejection of tokens with wrong `iss` and `aud`

---

### #84 No account lockout after repeated failed login attempts

**Label:** 🔒 security  
**Branch:** `feat/account-lockout-brute-force`  
**Timeframe:** 2 days

**Description:**
The login endpoint has no account-level brute-force protection. Rate limiting (Issue #12) protects per-IP, but an attacker using a botnet or rotating proxies can bypass IP-based limits. There is no mechanism to lock an account after N consecutive failed attempts, meaning a distributed brute-force attack against a known email address can run indefinitely.

**Tasks:**
- Add `failedLoginAttempts: number` (default: 0) and `lockedUntil: Date` (optional) fields to `UserModel`
- On each failed login: increment `failedLoginAttempts` and set `lockedUntil = now + 15 minutes` after 5 failures
- On login attempt: check `lockedUntil > now` and return `423 Locked` with `{ error: 'AccountLocked', retryAfter: ISO_DATE }` if locked
- On successful login: reset `failedLoginAttempts` to 0 and clear `lockedUntil`
- Add `POST /auth/unlock` (SUPER_ADMIN only) to manually unlock an account
- Log all lockout events to the audit log (Issue #51)

**Acceptance Criteria:**
- After 5 failed logins, the 6th attempt returns `423` even with the correct password
- After 15 minutes, the account automatically unlocks and login succeeds with correct credentials
- A successful login resets the failed attempt counter
- `POST /auth/unlock` by SUPER_ADMIN immediately unlocks the account
- Lockout events appear in the audit log

---

### #85 `node-fetch` v3 is ESM-only but project uses CommonJS — import will fail at runtime

**Label:** 🐛 bug  
**Branch:** `fix/remove-node-fetch-use-native`  
**Timeframe:** 3 hours

**Description:**
`apps/stellar-service/package.json` depends on `node-fetch@^3.3.2`. `node-fetch` v3 is an ESM-only package. The stellar-service uses `"module": "commonjs"` in its TypeScript config, which compiles to CommonJS. Attempting to `require()` an ESM-only package in a CommonJS context throws `ERR_REQUIRE_ESM` at runtime. The service will crash on startup.

**Tasks:**
- Remove `node-fetch` and `@types/node-fetch` from `apps/stellar-service/package.json`
- Replace all `import fetch from 'node-fetch'` with the native `fetch` available in Node 18+
- Add `"lib": ["ES2020", "DOM"]` to `apps/stellar-service/tsconfig.json` so TypeScript recognises the global `fetch` type
- Alternatively, pin `node-fetch` to `^2.7.0` (CommonJS-compatible) if native fetch is insufficient
- Verify the friendbot call in `POST /fund` works with native fetch

**Acceptance Criteria:**
- `npm run dev` in `apps/stellar-service` starts without `ERR_REQUIRE_ESM`
- `POST /fund` successfully calls the Stellar friendbot using native fetch
- No `node-fetch` import exists in the codebase
- TypeScript recognises `fetch` as a global without explicit import
- `npm run build` compiles without errors

---

### #86 Stellar `networkPassphrase` hardcoded as string literals

**Label:** 🐛 bug  
**Branch:** `fix/stellar-network-passphrase-const`  
**Timeframe:** 2 hours

**Description:**
`stellar-service/src/index.ts` hardcodes the mainnet passphrase `"Public Global Stellar Network ; September 2015"` and testnet passphrase `"Test SDF Network ; September 2015"` as inline strings. A single typo in either string would cause all transaction signing to fail silently or produce invalid transactions. These are well-known constants provided by the SDK.

**Tasks:**
- Import `Networks` from `@stellar/stellar-sdk`
- Replace the hardcoded mainnet passphrase with `Networks.PUBLIC`
- Replace the hardcoded testnet passphrase with `Networks.TESTNET`
- Add a startup check that logs the active network passphrase so it is visible in logs
- Add a unit test that verifies the correct passphrase is selected for each network value

**Acceptance Criteria:**
- No hardcoded network passphrase strings exist in the codebase
- `Networks.PUBLIC` and `Networks.TESTNET` are used exclusively
- The active network is logged at startup: `Stellar network: TESTNET`
- A unit test verifies passphrase selection for both `testnet` and `mainnet` config values
- `npm run build` passes with no TypeScript errors

---

### #87 No data encryption at rest for sensitive patient fields

**Label:** 🔒 security  
**Branch:** `feat/field-level-encryption-phi`  
**Timeframe:** 5 days

**Description:**
Patient records store `contactNumber`, `address`, and `dateOfBirth` in plaintext in MongoDB. If the database is compromised (e.g. via a misconfigured MongoDB instance, a backup leak, or an insider threat), all PHI is immediately readable. HIPAA's Technical Safeguards (45 CFR § 164.312(a)(2)(iv)) require encryption of PHI at rest.

**Tasks:**
- Install `mongoose-field-encryption` or implement field-level encryption using Node's `crypto` module with AES-256-GCM
- Add `FIELD_ENCRYPTION_KEY` (32-byte hex string) to `.env.example` and config
- Encrypt the following fields before saving to MongoDB: `contactNumber`, `address`, `dateOfBirth`
- Decrypt transparently on read using Mongoose middleware (`post('find')`, `post('findOne')`)
- Ensure encrypted fields are still searchable where needed (use deterministic encryption for `contactNumber` to allow exact-match lookup)
- Document the encryption approach and key rotation procedure in `SECURITY.md`

**Acceptance Criteria:**
- Raw MongoDB documents show encrypted (unreadable) values for `contactNumber`, `address`, `dateOfBirth`
- API responses return decrypted, human-readable values
- Searching by `contactNumber` (exact match) works correctly with deterministic encryption
- Rotating `FIELD_ENCRYPTION_KEY` has a documented migration procedure
- `npm run build` passes with no TypeScript errors related to encryption

---

### #88 No input sanitization for XSS in stored text fields

**Label:** 🔒 security  
**Branch:** `feat/xss-input-sanitization`  
**Timeframe:** 1 day

**Description:**
Text fields like `chiefComplaint`, `notes`, `treatmentPlan`, and `address` are stored as-is and returned in API responses. If the web app ever renders these fields as HTML (e.g. in a rich text display), stored XSS payloads like `<script>alert(1)</script>` would execute. Even with CSP (Issue #55), defence-in-depth requires sanitizing stored content.

**Tasks:**
- Install `dompurify` (server-side via `isomorphic-dompurify`) or use a simple HTML-stripping utility
- Create `apps/api/src/utils/sanitize.ts` exporting a `sanitizeText(input: string): string` function that strips HTML tags and encodes special characters
- Apply `sanitizeText` to all free-text fields before saving: `chiefComplaint`, `notes`, `treatmentPlan`, `address`, `fullName`
- Do not sanitize fields that should never contain HTML (e.g. `email`, `contactNumber`) — validate format instead
- Add a test: saving `<script>alert(1)</script>` in `notes` stores the sanitized version

**Acceptance Criteria:**
- `POST /encounters` with `notes: '<script>alert(1)</script>'` stores `alert(1)` or an empty string, never the raw script tag
- `GET /encounters/:id` returns the sanitized value
- Legitimate text with special characters (e.g. `O'Brien`, `<3 mg/dL`) is preserved correctly
- The sanitization utility is unit-tested with XSS payloads from the OWASP XSS cheat sheet

---

### #89 No password complexity enforcement beyond minimum length

**Label:** 🔒 security  
**Branch:** `feat/password-complexity-enforcement`  
**Timeframe:** 1 day

**Description:**
`auth.validation.ts` only enforces `password.min(8)`. A password of `aaaaaaaa` (8 identical characters) passes validation. For a healthcare application storing PHI, HIPAA guidelines recommend strong password policies. Weak passwords are the most common vector for account compromise.

**Tasks:**
- Update `loginSchema` and `registerSchema` in `auth.validation.ts` to enforce:
  - Minimum 12 characters (NIST SP 800-63B recommendation)
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one digit
  - At least one special character (`!@#$%^&*`)
  - Not a common password (check against a list of the top 1000 common passwords)
- Return specific Zod error messages for each failed rule
- Add a password strength indicator to the registration form in the web app

**Acceptance Criteria:**
- `password: 'aaaaaaaa'` returns `400` with a message listing all unmet requirements
- `password: 'Str0ng!Pass#2026'` passes validation
- Common passwords like `Password1!` are rejected
- The web app registration form shows a real-time password strength indicator
- Existing users are not forced to change passwords immediately (grace period with a notification)

---

### #90 No multi-factor authentication (MFA)

**Label:** 🔒 security  
**Branch:** `feat/mfa-totp-authentication`  
**Timeframe:** 5 days

**Description:**
The API only supports email/password authentication. For a healthcare application with access to PHI, single-factor authentication is insufficient. HIPAA does not explicitly mandate MFA but it is considered a best practice and is required by many healthcare compliance frameworks (SOC 2, HITRUST). A compromised password alone should not grant access to patient records.

**Tasks:**
- Add `mfaEnabled: boolean` (default: false) and `mfaSecret: string` (select: false) fields to `UserModel`
- Implement TOTP-based MFA using the `otplib` package
- Add `POST /auth/mfa/setup` — generates a TOTP secret and returns a QR code URI for authenticator apps
- Add `POST /auth/mfa/verify` — verifies the TOTP code and enables MFA on the account
- Modify the login flow: if `mfaEnabled`, return a `{ mfaRequired: true, tempToken: string }` response instead of full tokens; the client must then call `POST /auth/mfa/challenge` with the TOTP code to receive the real tokens
- Add `POST /auth/mfa/disable` (requires current password + TOTP code)

**Acceptance Criteria:**
- A user with MFA enabled cannot log in with only email/password — they receive `mfaRequired: true`
- `POST /auth/mfa/challenge` with a valid TOTP code returns `accessToken` and `refreshToken`
- `POST /auth/mfa/challenge` with an invalid or expired TOTP code returns `401`
- The `mfaSecret` field is never returned in any API response
- MFA setup generates a valid QR code that works with Google Authenticator and Authy


---

## DESIGN — Frontend Blueprint & Roadmap

> These design issues define the visual language, component architecture, and UX flows.
> Every frontend PR must reference the relevant design issue as its blueprint before implementation begins.

---

### #91 Define the global design system — color palette, typography, and spacing scale

**Label:** 🎨 design  
**Branch:** `design/global-design-system`  
**Timeframe:** 2 days

**Description:**
There is no visual identity for Health Watchers. Every frontend issue that touches UI will make ad-hoc decisions about colors, fonts, and spacing unless a design system is defined first. This issue establishes the single source of truth for all visual decisions in the app.

**Design Deliverables:**
- Color palette:
  - Primary: `#0F6FEC` (action blue — buttons, links, active states)
  - Primary dark: `#0A52B3` (hover states)
  - Success: `#16A34A` (confirmed payments, active status)
  - Warning: `#D97706` (pending states, alerts)
  - Danger: `#DC2626` (errors, destructive actions, failed payments)
  - Neutral scale: `#F9FAFB` → `#111827` (backgrounds, borders, text)
  - Surface: `#FFFFFF` (cards, modals)
  - Background: `#F3F4F6` (page background)
- Typography:
  - Font family: `Inter` (Google Fonts) — clean, medical-grade readability
  - Scale: `xs(12px)` `sm(14px)` `base(16px)` `lg(18px)` `xl(20px)` `2xl(24px)` `3xl(30px)`
  - Weights: 400 (body), 500 (labels), 600 (subheadings), 700 (headings)
- Spacing scale: 4px base unit — `4, 8, 12, 16, 20, 24, 32, 40, 48, 64px`
- Border radius: `sm(4px)` `md(8px)` `lg(12px)` `full(9999px)`
- Shadow scale: `sm`, `md`, `lg` for cards and modals
- All tokens defined in `tailwind.config.ts` under `theme.extend`

**Tasks:**
- Configure `tailwind.config.ts` with all tokens above
- Add `Inter` font via `next/font/google` in `layout.tsx`
- Create `apps/web/src/styles/globals.css` with Tailwind base + CSS custom properties for tokens
- Create a `apps/web/src/components/ui/` directory as the home for all base components
- Document all tokens in a `DESIGN_SYSTEM.md` file at `apps/web/`

**Acceptance Criteria:**
- All color, typography, and spacing tokens are defined in `tailwind.config.ts`
- `Inter` font loads via `next/font` with no layout shift
- No hardcoded hex colors or pixel values exist outside of `tailwind.config.ts`
- `DESIGN_SYSTEM.md` documents every token with its intended use case
- A developer can implement any screen using only the defined tokens

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #92 Design the reusable UI component library

**Label:** 🎨 design  
**Branch:** `design/ui-component-library`  
**Timeframe:** 3 days

**Description:**
All frontend issues depend on a consistent set of base UI components. Without a shared component library, each page will implement its own version of buttons, inputs, tables, and modals — leading to visual inconsistency and duplicated code. This issue defines and builds the complete set of base components that all other frontend work consumes.

**Design Deliverables & Component Specs:**

- `Button` — variants: `primary`, `secondary`, `ghost`, `danger`; sizes: `sm`, `md`, `lg`; states: default, hover, focus, disabled, loading (spinner)
- `Input` — with label, helper text, error state (red border + error message below), left/right icon slots
- `Select` — styled native select with chevron icon; same label/error pattern as Input
- `Textarea` — resizable, same label/error pattern
- `Badge` — variants: `success`, `warning`, `danger`, `info`, `neutral`; sizes: `sm`, `md`
- `Card` — white surface with `shadow-sm`, `rounded-lg`, optional header slot and footer slot
- `Modal` — centered overlay with backdrop blur, header, scrollable body, footer with action buttons; closes on Escape and backdrop click
- `SlideOver` — right-side panel (400px / 560px), same close behaviour as Modal
- `Table` — with sortable column headers, row hover state, empty state slot, loading skeleton rows
- `Pagination` — Previous / [1] [2] [3] ... [N] / Next with current page highlighted
- `Tabs` — horizontal tab bar with active underline indicator
- `Spinner` — three sizes: `sm`, `md`, `lg`
- `Toast` — top-right notifications: success (green), error (red), warning (yellow), info (blue); auto-dismiss after 4 seconds
- `EmptyState` — centered illustration slot + heading + subtext + optional CTA button
- `Skeleton` — animated gray placeholder for loading states; variants: text line, card, table row
- `Avatar` — circular, initials fallback when no image, sizes: `sm`, `md`, `lg`
- `SearchInput` — Input with magnifier icon pre-wired, debounce prop, clear button

**Tasks:**
- Create each component in `apps/web/src/components/ui/`
- Each component must be fully typed with TypeScript props interface
- Each component must have `className` prop for extension
- All interactive components must meet WCAG AA accessibility (keyboard nav, ARIA labels, focus rings)
- Install `class-variance-authority` (CVA) for variant management
- Install `@radix-ui/react-dialog` for Modal and SlideOver (accessible primitives)
- Install `@radix-ui/react-tabs` for Tabs
- Install `sonner` for Toast notifications

**Acceptance Criteria:**
- All 17 components exist in `apps/web/src/components/ui/`
- Every component accepts and forwards a `className` prop
- All form components (Input, Select, Textarea) work with `react-hook-form` `register()`
- Modal and SlideOver trap focus correctly and close on Escape
- Toast notifications stack correctly and auto-dismiss
- No component uses inline `style={{}}` props

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #93 Design the navigation layout and sidebar structure

**Label:** 🎨 design  
**Branch:** `design/navigation-layout`  
**Timeframe:** 1 day

**Description:**
The app currently has a single-line nav with plain anchor tags. A clinical EMR needs a persistent, role-aware sidebar navigation that gives staff quick access to all modules. The layout must work on both desktop and mobile (collapsible on small screens).

**Design Deliverables:**
- Layout structure:
  - Left sidebar (240px wide on desktop, hidden on mobile behind hamburger)
  - Top header bar (56px) with: app logo left, clinic name center, user avatar + logout right
  - Main content area: full remaining width with `24px` padding
- Sidebar nav items (with icons):
  - 🏠 Dashboard
  - 👥 Patients
  - 🩺 Encounters
  - 💳 Payments
  - 📅 Appointments *(future)*
  - 📄 Documents *(future)*
  - ⚙️ Settings *(CLINIC_ADMIN+ only)*
  - 🔐 Audit Log *(SUPER_ADMIN only)*
- Active state: left border accent `4px solid primary`, background `primary/10`
- Mobile: sidebar slides in from left as a drawer overlay with a dark backdrop
- Role-based visibility: nav items hidden if the user's role lacks permission

**Tasks:**
- Create `apps/web/src/components/layout/Sidebar.tsx`
- Create `apps/web/src/components/layout/TopBar.tsx`
- Create `apps/web/src/components/layout/AppLayout.tsx` composing sidebar + topbar + content slot
- Wrap all authenticated pages in `AppLayout` via `layout.tsx`
- Use `usePathname()` to highlight the active nav item
- Implement mobile drawer with `useState` open/close and focus trap

**Acceptance Criteria:**
- Sidebar is visible on screens ≥ 768px and hidden (drawer) on smaller screens
- Active route is visually distinct from inactive routes
- Role-restricted nav items are not rendered for users without the required role
- Clicking outside the mobile drawer closes it
- Keyboard navigation works: `Tab` moves through nav items, `Enter` activates them

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #94 Design the authentication screens — login and password reset

**Label:** 🎨 design  
**Branch:** `design/auth-screens`  
**Timeframe:** 1 day

**Description:**
The login page is the first thing every user sees. It must be clean, trustworthy, and accessible. The design must also cover the forgot-password and reset-password flows.

**Design Deliverables:**
- Login page layout:
  - Centered card (400px wide, `shadow-lg`, `rounded-lg`) on a `bg-gray-50` full-screen background
  - App logo + "Health Watchers" heading at top of card
  - Tagline: *"Secure AI-assisted medical records"*
  - Fields: Email (with envelope icon), Password (with eye toggle for show/hide)
  - "Forgot password?" link aligned right below password field
  - Primary CTA button: "Sign In" (full width, `h-11`)
  - Error state: red banner below the button with the error message
  - Loading state: spinner inside the button, button disabled
- Forgot password page: single email field + "Send reset link" button + back to login link
- Reset password page: new password + confirm password fields + strength indicator bar
- MFA challenge page (for Issue #66): 6-digit OTP input with auto-advance between digits

**Tasks:**
- Create `apps/web/src/app/(auth)/login/page.tsx`
- Create `apps/web/src/app/(auth)/forgot-password/page.tsx`
- Create `apps/web/src/app/(auth)/reset-password/page.tsx`
- Create `apps/web/src/components/ui/PasswordInput.tsx` (with show/hide toggle)
- Create `apps/web/src/components/ui/OtpInput.tsx` (6-digit auto-advance)
- Use a Next.js route group `(auth)` with its own layout (no sidebar)

**Acceptance Criteria:**
- Login page renders correctly on 375px and 1280px viewports
- Password show/hide toggle works and is keyboard accessible
- "Forgot password?" link navigates to the forgot-password page
- Error messages are announced to screen readers via `role="alert"`
- The auth layout has no sidebar or top bar

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #95 Design the Dashboard / Home page

**Label:** 🎨 design  
**Branch:** `design/dashboard-home`  
**Timeframe:** 2 days

**Description:**
The current home page is a blank page with three links. The dashboard should give clinical staff an at-a-glance view of the clinic's activity for the day. It is the first page seen after login and sets the tone for the entire application.

**Design Deliverables:**
- Stats row (4 cards across): Today's Patients, Today's Encounters, Pending Payments, Active Doctors
  - Each card: icon (colored), large number, label, subtle trend indicator (↑ vs yesterday)
- Recent Patients table (last 5 registered): systemId, name, DOB, registered date, "View" link
- Today's Encounters list (last 5): patient name, chief complaint, doctor, time, status badge
- Pending Payments list (last 5): patient name, amount + asset, status badge, "Confirm" action
- Quick action buttons row: "+ New Patient", "+ Log Encounter", "+ Payment Intent"
- Empty states: illustrated empty state with a CTA when each section has no data

**Tasks:**
- Create `apps/web/src/app/(dashboard)/page.tsx`
- Create `apps/web/src/components/dashboard/StatCard.tsx`
- Create `apps/web/src/components/dashboard/RecentTable.tsx` (reusable for all three lists)
- Create `apps/web/src/components/ui/Badge.tsx` for status indicators
- Create `apps/web/src/components/ui/EmptyState.tsx`
- Fetch all dashboard data in parallel using TanStack Query `useQueries`

**Acceptance Criteria:**
- Dashboard loads in under 1 second on a fast connection
- All four stat cards show real data from the API
- Empty states display when sections have no data (not blank space)
- Quick action buttons open the correct create forms (Issue #35)
- Dashboard is responsive: stat cards stack 2×2 on tablet, 1×4 on desktop

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #96 Design the Patients module — list, search, detail, and create/edit forms

**Label:** 🎨 design  
**Branch:** `design/patients-module`  
**Timeframe:** 3 days

**Description:**
The patients module is the core of the EMR. It needs a well-structured list view with search, a detailed patient profile page, and forms for creating and editing patients. The design must handle large datasets gracefully and make it easy to find a patient quickly.

**Design Deliverables:**
- Patient list page (`/patients`):
  - Page header: "Patients" title + patient count badge + "+ New Patient" button (right)
  - Search bar (full width, with magnifier icon, debounced) above the table
  - Table columns: System ID | Full Name | Date of Birth | Sex | Contact | Status | Actions
  - Row actions: "View" (eye icon), "Edit" (pencil icon) — inline icon buttons
  - Status column: green "Active" badge / red "Inactive" badge
  - Pagination controls at the bottom: Previous / Page X of Y / Next
  - Empty state: illustration + "No patients found. Add your first patient."
- Patient detail page (`/patients/:id`):
  - Header card: patient name (large), systemId, age, sex, contact — with "Edit" button top right
  - Tabs: Overview | Encounters | Payments | Documents
  - Overview tab: all patient fields in a 2-column grid of label/value pairs
  - Encounters tab: chronological list of encounters with chief complaint, date, doctor, status
  - Payments tab: list of payment records with amount, status, tx hash link
- Create / Edit patient slide-over panel (not a separate page):
  - Slides in from the right (400px wide) over the list page
  - Fields: First Name, Last Name, Date of Birth (date picker), Sex (radio group), Contact Number, Address (textarea)
  - Footer: Cancel (ghost button) + Save (primary button)

**Tasks:**
- Create `apps/web/src/components/patients/PatientTable.tsx`
- Create `apps/web/src/components/patients/PatientDetailTabs.tsx`
- Create `apps/web/src/components/ui/SlideOver.tsx` (reusable panel component)
- Create `apps/web/src/components/ui/Tabs.tsx`
- Create `apps/web/src/components/ui/Pagination.tsx`
- Create `apps/web/src/components/forms/PatientForm.tsx`

**Acceptance Criteria:**
- Patient list renders with correct columns and data from the API
- Search filters the list in real time (debounced 300ms)
- Clicking "View" navigates to `/patients/:id`
- The slide-over opens on "+ New Patient" and "Edit" clicks
- The slide-over closes on Cancel, successful save, or pressing Escape
- Pagination controls work and reflect the correct page/total

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #97 Design the Encounters module — list, detail, and log encounter form

**Label:** 🎨 design  
**Branch:** `design/encounters-module`  
**Timeframe:** 2 days

**Description:**
Encounters are the clinical heart of the EMR. Doctors log encounters during or after a patient visit. The design must make it fast to log a new encounter and easy to review past ones. The AI summary feature (Issue #63) must be designed into the encounter detail view from the start.

**Design Deliverables:**
- Encounters list page (`/encounters`):
  - Filter bar: Date range picker | Doctor dropdown | Status dropdown | Patient search
  - Table columns: Patient | Chief Complaint | Doctor | Date & Time | Status | Actions
  - Status badges: `draft` (gray), `completed` (green), `cancelled` (red)
  - Row action: "View" link
- Encounter detail page (`/encounters/:id`):
  - Header: Patient name + systemId (linked to patient page), encounter date, status badge, attending doctor
  - Section: Vital Signs — displayed as a row of labeled values (BP, HR, Temp, Weight, O₂ Sat)
  - Section: Chief Complaint — plain text block
  - Section: Diagnosis — list of diagnosis codes with type badges (Primary / Secondary)
  - Section: Treatment Plan — plain text block
  - Section: Prescriptions — table of medication, dosage, frequency, duration
  - Section: AI Summary — card with a purple "AI" badge, the summary text, and a "Regenerate" button (Issue #63)
  - Section: Follow-up Date — date display with "Schedule Appointment" link
- Log Encounter form (slide-over, 560px wide):
  - Step 1 — Patient & Basics: patient search select, chief complaint, attending doctor
  - Step 2 — Clinical Data: vital signs inputs, diagnosis (add multiple), treatment plan
  - Step 3 — Prescriptions: add/remove prescription rows
  - Progress indicator at top showing current step

**Tasks:**
- Create `apps/web/src/components/encounters/EncounterTable.tsx`
- Create `apps/web/src/components/encounters/EncounterDetail.tsx`
- Create `apps/web/src/components/encounters/VitalSignsDisplay.tsx`
- Create `apps/web/src/components/encounters/AiSummaryCard.tsx`
- Create `apps/web/src/components/forms/EncounterForm.tsx` (multi-step)
- Create `apps/web/src/components/ui/MultiStep.tsx` (step progress indicator)

**Acceptance Criteria:**
- Encounter list filters work independently and in combination
- Encounter detail shows all clinical sections with correct data
- The AI Summary card shows a loading skeleton while the AI generates the summary
- The multi-step form validates each step before advancing
- Pressing "Back" in the multi-step form preserves already-entered data

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #98 Design the Payments module — list, intent creation, and confirmation flow

**Label:** 🎨 design  
**Branch:** `design/payments-module`  
**Timeframe:** 2 days

**Description:**
The payments module handles Stellar blockchain transactions. The UI must make the payment flow clear and trustworthy — users need to understand what they are authorising before a transaction is submitted. The design must handle the async nature of blockchain confirmation gracefully.

**Design Deliverables:**
- Payments list page (`/payments`):
  - Filter bar: Status tabs (All | Pending | Confirmed | Failed) | Date range
  - Table columns: Patient | Amount + Asset | Destination (truncated Stellar address) | Memo | Status | Date | Actions
  - Status badges: `pending` (yellow), `confirmed` (green), `failed` (red)
  - Row actions: "Confirm" button (only for pending), "View on Explorer" link (only for confirmed)
- Create Payment Intent slide-over:
  - Patient search select
  - Amount input with asset selector (XLM / USDC)
  - Summary box before submit: "You are creating a payment intent for [Patient] — [Amount] [Asset] to [Destination]"
  - Submit button: "Create Intent"
- Confirm Payment modal (triggered from "Confirm" row action):
  - Input: Transaction Hash field with paste button
  - Info text: "Enter the Stellar transaction hash after completing the payment in your wallet"
  - Link to Stellar testnet/mainnet explorer
  - Submit button: "Verify & Confirm"
  - Loading state: "Verifying on Stellar network..." with a spinner
  - Success state: green checkmark + "Payment confirmed" + tx hash link
  - Failure state: red X + reason message + "Try Again" button

**Tasks:**
- Create `apps/web/src/components/payments/PaymentTable.tsx`
- Create `apps/web/src/components/payments/ConfirmPaymentModal.tsx`
- Create `apps/web/src/components/forms/PaymentIntentForm.tsx`
- Create `apps/web/src/components/ui/Modal.tsx` (reusable modal with backdrop)
- Create `apps/web/src/components/ui/AssetSelector.tsx`
- Create `apps/web/src/components/ui/StellarAddressDisplay.tsx` (truncated with copy button)

**Acceptance Criteria:**
- Payment list shows correct status badges and filters work
- "Confirm" action is only visible on `pending` rows
- The confirm modal shows a loading state while calling the API
- Success and failure states are clearly distinct
- "View on Explorer" link uses the correct network URL (Issue #38)

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #99 Design the user settings and profile page

**Label:** 🎨 design  
**Branch:** `design/settings-profile-page`  
**Timeframe:** 1 day

**Description:**
Users need a place to manage their account: update their profile, change their password, enable MFA, and set their language preference. This page is accessible from the user avatar in the top bar.

**Design Deliverables:**
- Settings page (`/settings`) with left sub-navigation:
  - Profile — full name, email (read-only), role badge, clinic name (read-only)
  - Security — change password form, MFA enable/disable toggle with QR code display
  - Preferences — language selector (Issue #74), notification preferences
- Profile section:
  - Editable: Full Name
  - Read-only (grayed out): Email, Role, Clinic
  - Save button only appears when a field has been changed
- Security section:
  - Change password: Current Password | New Password | Confirm New Password — all with show/hide toggles
  - Password strength bar (5 segments: very weak → very strong) updates in real time
  - MFA card: current status badge (Enabled / Disabled), "Enable MFA" button that opens a modal with QR code + verification input
- Preferences section:
  - Language dropdown: English, French (expandable)
  - Email notifications toggles: Appointment reminders, Payment confirmations

**Tasks:**
- Create `apps/web/src/app/(dashboard)/settings/page.tsx`
- Create `apps/web/src/components/settings/ProfileForm.tsx`
- Create `apps/web/src/components/settings/ChangePasswordForm.tsx`
- Create `apps/web/src/components/settings/MfaSetupModal.tsx`
- Create `apps/web/src/components/ui/PasswordStrengthBar.tsx`
- Create `apps/web/src/components/ui/Toggle.tsx`

**Acceptance Criteria:**
- Profile form only shows the Save button when a field value has changed
- Password strength bar updates in real time as the user types
- MFA setup modal shows a scannable QR code and a 6-digit verification input
- Language change takes effect immediately without a page reload
- All form submissions show loading states and success/error toasts

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #100 Design the empty states, loading skeletons, and error screens

**Label:** 🎨 design  
**Branch:** `design/empty-loading-error-states`  
**Timeframe:** 1 day

**Description:**
Every data-driven page has three states beyond the happy path: loading, empty, and error. These states are currently either missing or show raw text strings. Consistent, well-designed states make the app feel polished and help users understand what is happening.

**Design Deliverables:**
- Loading skeletons (animated gray pulse):
  - Table skeleton: 5 rows of gray bars matching the column widths of each table
  - Stat card skeleton: gray rectangle for the number, shorter bar for the label
  - Detail page skeleton: header block + 3 section blocks
- Empty states (per module):
  - Patients: illustration of a person silhouette + "No patients yet" + "Add your first patient" button
  - Encounters: stethoscope illustration + "No encounters logged" + "Log an encounter" button
  - Payments: wallet illustration + "No payments yet" + "Create a payment intent" button
  - Search results: magnifier illustration + "No results for '[query]'" + "Clear search" link
- Error screens:
  - API error (fetch failed): warning icon + "Something went wrong" + "Try again" button that retries the query
  - 404 page (`not-found.tsx`): large "404" + "Page not found" + "Go to Dashboard" button
  - 500 / error boundary (`error.tsx`): "An unexpected error occurred" + error ID (from `requestId`) + "Reload page" button

**Tasks:**
- Create `apps/web/src/components/ui/Skeleton.tsx` with `TableSkeleton`, `CardSkeleton`, `DetailSkeleton` variants
- Create `apps/web/src/components/ui/EmptyState.tsx` with per-module presets
- Create `apps/web/src/app/not-found.tsx`
- Create `apps/web/src/app/error.tsx` (Next.js error boundary)
- Create `apps/web/src/app/(dashboard)/error.tsx` (dashboard-scoped error boundary)

**Acceptance Criteria:**
- Every list page shows the table skeleton while data is loading (not a spinner or blank space)
- Every list page shows the correct empty state when the API returns an empty array
- Every list page shows the error state with a retry button when the API call fails
- The 404 page renders for unknown routes
- The error boundary catches rendering errors and shows the error screen with a `requestId`

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #101 Design the responsive mobile layout

**Label:** 🎨 design  
**Branch:** `design/responsive-mobile-layout`  
**Timeframe:** 2 days

**Description:**
Clinical staff use tablets and phones at the point of care. The entire app must be usable on a 375px viewport. This issue defines the specific responsive behaviour for every layout pattern in the app.

**Design Deliverables:**
- Breakpoints (matching Tailwind defaults):
  - `sm`: 640px — single column layouts
  - `md`: 768px — sidebar becomes visible, 2-column grids
  - `lg`: 1024px — full desktop layout
- Mobile-specific patterns:
  - Sidebar: hidden, replaced by a bottom navigation bar with 4 icons (Dashboard, Patients, Encounters, Payments) + a "More" overflow menu
  - Tables: on `< md`, switch from table layout to stacked card layout — each row becomes a card with label/value pairs
  - Slide-overs: full screen on mobile (`w-full`) instead of fixed 400px
  - Modals: full screen on mobile with a close button at the top
  - Forms: single column on mobile, 2-column grid on desktop
  - Stat cards: 2×2 grid on mobile, 4×1 row on desktop
- Touch targets: all interactive elements minimum 44×44px (WCAG 2.5.5)

**Tasks:**
- Update `AppLayout.tsx` to show bottom nav on mobile instead of sidebar
- Create `apps/web/src/components/layout/BottomNav.tsx`
- Update all Table components to render as card lists on mobile using CSS grid
- Update all SlideOver components to be full-screen on mobile
- Update all Modal components to be full-screen on mobile
- Audit every form for single-column mobile layout

**Acceptance Criteria:**
- Bottom navigation is visible on viewports < 768px and hidden on ≥ 768px
- All tables render as stacked cards on mobile (no horizontal scroll of the page)
- All touch targets are at least 44×44px
- Slide-overs and modals are full-screen on mobile
- Lighthouse mobile score ≥ 85 on all main pages
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

### #102 Inline styles used throughout — no design system or CSS

**Label:** 🎨 design  
**Branch:** `design/tailwind-design-system-impl`  
**Timeframe:** 3 days

**Description:**
All pages use raw `style={{}}` props with hardcoded pixel values and colors. There is no CSS modules setup, no Tailwind, and no component library. The UI is visually inconsistent, inaccessible (no focus styles, no color contrast guarantees), and extremely difficult to maintain or theme.

**Tasks:**
- Install and configure Tailwind CSS in `apps/web` following the Next.js + Tailwind setup guide
- Create a design token file (`tailwind.config.ts`) with the app's color palette, typography, and spacing
- Replace all inline `style={{}}` props with Tailwind utility classes
- Create base layout components: `PageWrapper`, `PageHeader`, `Card`, `Button`, `Input`, `Select`, `Table`
- Ensure all interactive elements have visible focus styles (accessibility requirement)
- Add a global CSS file `apps/web/src/app/globals.css` with Tailwind base, components, and utilities

**Acceptance Criteria:**
- No `style={{}}` props remain in any component
- All pages use Tailwind classes for layout and styling
- Buttons have hover, focus, and disabled states
- Color contrast ratio meets WCAG AA (4.5:1 for normal text)
- `npm run build` succeeds with Tailwind configured

> PRs without visual proof will not be reviewed or merged.
**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must demonstrate the implemented feature working end-to-end in the browser.
> PRs without visual proof will not be reviewed or merged.


---

*Total: 102 issues — Backend (43) · Frontend (14) · Infra (24) · Security (9) · Design (12)*

---

## FIGMA UI/UX DESIGN — Screen Designs & Prototypes

> These issues cover the creation of all Figma screen designs, component specs, and interactive prototypes that frontend engineers use as their pixel-perfect implementation blueprint. Every frontend issue (#44–#57) and design issue (#91–#102) **must** have a corresponding Figma frame linked before any code is written. Engineers must not guess layout, spacing, or visual decisions — they follow the Figma file exactly.

---

### #103 Create the Figma project structure and shared component library

**Label:** 🎨 design
**Branch:** `design/figma-project-setup`
**Timeframe:** 1 day

**Description:**
Before any screen can be designed, the Figma project must be set up with the correct structure, shared styles, and a component library that mirrors the design system defined in issue #91. Without this foundation, individual screen designers will make inconsistent decisions about spacing, color, and typography. This is the single most important Figma issue — all others depend on it.

**Tasks:**
- Create a Figma project named **"Health Watchers – Design System & Screens"**
- Set up three pages inside the file:
  - `🎨 Design System` — all tokens, components, and patterns
  - `📱 Screens` — all app screens organised by module
  - `🔄 Prototypes` — interactive flows linking screens together
- In the `Design System` page define all Figma Styles:
  - **Color styles:** Primary `#0F6FEC`, Primary Dark `#0A52B3`, Success `#16A34A`, Warning `#D97706`, Danger `#DC2626`, Neutral 50–900, Surface `#FFFFFF`, Background `#F3F4F6`
  - **Text styles:** H1–H4, Body Large, Body, Body Small, Label, Caption — all Inter font
  - **Effect styles:** Shadow SM, Shadow MD, Shadow LG
  - **Grid styles:** 12-column desktop grid, 4-column mobile grid
- Build the Figma Component Library for all 17 components from issue #92: Button (all variants + states), Input, Select, Textarea, Badge, Card, Modal, SlideOver, Table, Pagination, Tabs, Spinner, Toast, EmptyState, Skeleton, Avatar, SearchInput
- Each component must use **Auto Layout** and **Figma Variables** for spacing and color tokens
- Publish the library so all team members can use components via the Assets panel
- Add the Figma file link to `README.md` under a `## Design` section

**Acceptance Criteria:**
- Figma file is accessible to all team members via a shared link
- All color, text, and effect styles match the tokens in `tailwind.config.ts`
- Every component has default, hover, focused, disabled, and error states as Figma variants
- Components use Auto Layout — resizing does not break layout
- Library is published and components appear in the Assets panel
- Figma link is committed to `README.md`

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show the Figma file open with the Design System page, published library, and all components visible in the Assets panel.
> PRs without visual proof will not be reviewed or merged.

---

### #104 Design Figma screens — Authentication flow

**Label:** 🎨 design
**Branch:** `design/figma-auth-screens`
**Timeframe:** 1 day

**Description:**
The authentication screens are the entry point to the entire application. These Figma frames define the exact layout, spacing, copy, and interaction states that the frontend engineer must implement for issues #45 (web auth) and #90 (MFA). Designs must cover all states: empty, filled, loading, error, and success.

**Tasks:**
- Design the following frames at **1440×900** (desktop) and **390×844** (mobile):
  - **Login:** logo, tagline, email field, password field with show/hide toggle, "Forgot password?" link, "Sign In" button — plus error banner state and loading state (spinner in button)
  - **Forgot Password:** heading, subtext, email field, "Send Reset Link" button, success state (email sent confirmation), back to login link
  - **Reset Password:** new password field, confirm password field, password strength bar (5 levels), "Reset Password" button, success redirect state
  - **MFA Challenge:** "Two-Factor Authentication" heading, 6-digit OTP input boxes with auto-advance, "Verify" button, "Resend code" link, error state (wrong code highlighted red)
- All screens use components from the shared library (#103)
- Annotate each screen with field labels, placeholder text, error messages, and button copy
- Add red-line spec overlay showing padding, margin, and font size values

**Acceptance Criteria:**
- All 4 screens exist in `Screens/Authentication` with desktop and mobile frames
- All interactive states (empty, filled, error, loading, success) are designed for each screen
- Components are from the shared library, not one-off designs
- A developer can implement any screen without asking design questions
- Figma link added as a comment on issues #45 and #90

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show all 4 auth screens in Figma with desktop and mobile frames visible.
> PRs without visual proof will not be reviewed or merged.

---

### #105 Design Figma screens — Dashboard / Home

**Label:** 🎨 design
**Branch:** `design/figma-dashboard-screen`
**Timeframe:** 1 day

**Description:**
The dashboard is the first screen after login. It must communicate the clinic's daily activity at a glance. This issue covers the full desktop and mobile design including all data states (loaded, loading, empty).

**Tasks:**
- Design at **1440×900** (desktop) and **390×844** (mobile):
  - **Loaded state:** sidebar nav, top bar, 4 stat cards (Today's Patients, Today's Encounters, Pending Payments, Active Doctors), Recent Patients table (5 rows), Today's Encounters list, Pending Payments list, Quick Action buttons row
  - **Loading state:** skeleton versions of all cards and tables
  - **Empty state:** all sections showing empty state illustrations with CTAs
- Sidebar in both **expanded** (240px) and **collapsed** (64px icon-only) states
- Top bar: logo, clinic name, notification bell, user avatar with dropdown (Profile, Settings, Logout)
- Mobile: bottom navigation bar (4 icons), stacked single-column layout, stat cards in 2×2 grid
- Annotate all spacing, font sizes, and color tokens

**Acceptance Criteria:**
- Desktop and mobile frames exist for loaded, loading, and empty states
- Sidebar expanded and collapsed states are both designed
- Realistic placeholder data used throughout (not "Lorem ipsum")
- Figma link added as a comment on issue #95

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show the dashboard Figma frames including all 3 data states.
> PRs without visual proof will not be reviewed or merged.

---

### #106 Design Figma screens — Patients module

**Label:** 🎨 design
**Branch:** `design/figma-patients-screens`
**Timeframe:** 2 days

**Description:**
The patients module is the most-used part of the EMR. Doctors and nurses interact with it dozens of times per day. Figma designs must cover every state and interaction so the frontend engineer has zero ambiguity when implementing issues #44, #46, #47, #49, and #96.

**Tasks:**
- Design at **1440×900** (desktop) and **390×844** (mobile):
  - **Patient List:** table (System ID, Full Name, DOB, Sex, Contact, Status, Actions), search bar, "+ New Patient" button, pagination — plus search active, empty, and loading states
  - **Create Patient slide-over:** right panel (400px), all form fields, Cancel + Save buttons, per-field validation error states
  - **Edit Patient slide-over:** same as create but pre-filled
  - **Patient Detail — Overview tab:** header card (name, systemId, age, sex, contact, Edit button), 2-column field grid
  - **Patient Detail — Encounters tab:** chronological encounter list
  - **Patient Detail — Payments tab:** payment records list
  - **Deactivate confirmation modal:** "Are you sure?" with Cancel + Confirm Deactivate buttons
- Mobile: table becomes stacked card list, slide-over becomes full-screen

**Acceptance Criteria:**
- All listed frames exist in `Screens/Patients` with desktop and mobile versions
- Every form field shows default, focused, filled, and error states
- Realistic placeholder data used (e.g. "Sarah Johnson", "HW-ABC-001042")
- Figma link added as a comment on issues #96 and #46

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show the patient list, detail page, and create slide-over frames in Figma.
> PRs without visual proof will not be reviewed or merged.

---

### #107 Design Figma screens — Encounters module

**Label:** 🎨 design
**Branch:** `design/figma-encounters-screens`
**Timeframe:** 2 days

**Description:**
Encounters are the clinical core of the EMR. The log encounter form is the most complex form in the app — multi-step, with clinical data inputs. The AI summary card must also be designed here so the frontend engineer knows exactly how to present it (issue #35, #97).

**Tasks:**
- Design at **1440×900** (desktop) and **390×844** (mobile):
  - **Encounter List:** table (Patient, Chief Complaint, Doctor, Date & Time, Status), filter bar (date range, doctor dropdown, status tabs) — plus empty and loading states
  - **Encounter Detail:** header (patient name linked, date, status badge, doctor), Vital Signs row, Chief Complaint, Diagnosis list, Treatment Plan, Prescriptions table, AI Summary card, Follow-up date
  - **AI Summary card — 3 states:** loading (skeleton + "Generating AI summary…"), loaded (purple AI badge + summary text + "Regenerate" button), error ("AI unavailable" + retry)
  - **Log Encounter — Step 1:** step progress bar, patient search select, chief complaint, attending doctor
  - **Log Encounter — Step 2:** vital signs inputs grid, diagnosis add/remove rows, treatment plan
  - **Log Encounter — Step 3:** prescriptions add/remove rows, review summary, Submit button
  - **Step validation error state:** red borders on required fields, error messages, step indicator error state

**Acceptance Criteria:**
- All listed frames exist in `Screens/Encounters` with desktop and mobile versions
- Multi-step form shows all 3 steps with progress indicator in each state
- AI Summary card shows all 3 states (loading, loaded, error)
- Figma link added as a comment on issues #97 and #35

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show the encounter list, detail, AI summary card states, and all 3 form steps.
> PRs without visual proof will not be reviewed or merged.

---

### #108 Design Figma screens — Payments module

**Label:** 🎨 design
**Branch:** `design/figma-payments-screens`
**Timeframe:** 1 day

**Description:**
The payments module handles real Stellar blockchain transactions. The UI must feel trustworthy and make the payment flow unambiguous. The confirmation flow must handle async blockchain verification with clear loading and result states (issues #50, #98).

**Tasks:**
- Design at **1440×900** (desktop) and **390×844** (mobile):
  - **Payment List:** status tab filters (All / Pending / Confirmed / Failed), table (Patient, Amount + Asset, Destination truncated, Memo, Status badge, Date, Actions) — plus empty and loading states
  - **Create Payment Intent slide-over:** patient search, amount input, asset selector (XLM / USDC), summary confirmation box, Submit button
  - **Confirm Payment modal — 4 states:** input (tx hash field, paste button, explorer link), loading ("Verifying on Stellar network…"), success (green checkmark, tx hash link), failure (red X, reason, "Try Again")
- Stellar address display: first 6 + `...` + last 6 characters, copy icon
- Status badges: pending=yellow, confirmed=green, failed=red

**Acceptance Criteria:**
- All listed frames exist in `Screens/Payments` with desktop and mobile versions
- All 4 confirm modal states are designed
- Stellar address truncation pattern is clearly shown
- Figma link added as a comment on issues #98 and #50

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show the payments list and all 4 states of the confirm payment modal.
> PRs without visual proof will not be reviewed or merged.

---

### #109 Design Figma screens — Settings & Profile page

**Label:** 🎨 design
**Branch:** `design/figma-settings-screens`
**Timeframe:** 1 day

**Description:**
The settings page lets users manage their account, security, and preferences. Must cover all sub-sections: Profile, Security (password + MFA), and Preferences (language + notifications). Feeds into issues #45, #90, and #99.

**Tasks:**
- Design at **1440×900** (desktop) and **390×844** (mobile):
  - **Profile tab:** left sub-nav, editable Full Name, read-only Email + Role + Clinic (grayed), Save button (only visible when a field is changed — annotate this behaviour)
  - **Security tab:** Change Password form (Current, New, Confirm — all with show/hide toggles), password strength bar (5 segments, red→green), MFA card (status badge, "Enable MFA" button)
  - **MFA Setup modal:** QR code placeholder (128×128), instruction text, 6-digit verification input, "Verify & Enable" button
  - **Preferences tab:** language dropdown, notification toggles (Appointment Reminders, Payment Confirmations, System Alerts)
  - **Mobile:** sub-nav becomes horizontal scrollable tab bar at top

**Acceptance Criteria:**
- All 3 settings tabs designed with desktop and mobile frames
- Password strength bar shows all 5 levels with distinct colors
- Save button visibility logic is annotated on the frame
- Figma link added as a comment on issue #99

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show all 3 settings tabs and the MFA setup modal in Figma.
> PRs without visual proof will not be reviewed or merged.

---

### #110 Design Figma — Empty states, loading skeletons, and error screens

**Label:** 🎨 design
**Branch:** `design/figma-states-screens`
**Timeframe:** 1 day

**Description:**
Every data-driven page has loading, empty, and error states. These must be designed consistently as a reusable pattern library so the frontend engineer has a single reference for all state designs (issue #100).

**Tasks:**
- Design a **States Pattern Library** frame in the `Design System` page:
  - **Skeletons:** table skeleton (5 rows matching patients/encounters/payments column widths), stat card skeleton, detail page skeleton
  - **Empty states:** Patients (person silhouette SVG + "No patients yet" + CTA), Encounters (stethoscope SVG), Payments (wallet SVG), Search results (magnifier SVG + "No results for '[query]'" + "Clear search")
  - **Error states:** API error (warning icon + "Something went wrong" + "Try again"), 404 page (large "404" + "Page not found" + "Go to Dashboard"), 500/crash page ("An unexpected error occurred" + error ID field + "Reload page")
- All SVG illustrations must be simple line-art style, consistent visual language
- Annotate skeleton animation: `opacity` pulse between `#E5E7EB` and `#F3F4F6`, 1.5s ease-in-out infinite

**Acceptance Criteria:**
- All 11 state designs exist in `Design System/States`
- Skeleton column widths match the actual table column widths
- All 4 empty state illustrations are unique and module-relevant
- Error states include a `requestId` display field
- Figma link added as a comment on issue #100

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show the full States Pattern Library frame in Figma.
> PRs without visual proof will not be reviewed or merged.

---

### #111 Create Figma interactive prototype — full user journey flows

**Label:** 🎨 design
**Branch:** `design/figma-prototype-flows`
**Timeframe:** 2 days

**Description:**
Static screens alone are not enough to validate UX. An interactive Figma prototype links all screens together so the complete user journey can be clicked through before any code is written. This catches UX problems early when they are cheap to fix.

**Tasks:**
- Build interactive prototypes in the `Prototypes` page for 5 flows:
  - **Flow 1 — Login to Dashboard:** Login → (success) → Dashboard; Login → (wrong password) → error state; Login → MFA challenge → Dashboard
  - **Flow 2 — Register a patient:** Dashboard → Patients list → "+ New Patient" → slide-over opens → fill form → submit → slide-over closes → new patient in list
  - **Flow 3 — Log an encounter:** Patient detail → Encounters tab → "+ Log Encounter" → Step 1 → Step 2 → Step 3 → submit → encounter in list → Encounter detail with AI summary loading
  - **Flow 4 — Create and confirm a payment:** Payments list → "+ Create Intent" → submit → pending row → "Confirm" → modal → tx hash → loading → success
  - **Flow 5 — Password reset:** Login → "Forgot password?" → email sent state → Reset password → success → Login
- Use **Smart Animate** transitions: slide-overs animate from right (300ms ease-out), modals fade + scale (200ms ease-out)
- Share prototype links (view-only) and add all 5 to `README.md` under `## Design`

**Acceptance Criteria:**
- All 5 flows are clickable end-to-end in Figma prototype mode
- Slide-overs and modals use Smart Animate transitions
- Each flow has a clearly labelled start frame
- Prototype links are view-only and added to `README.md`
- A stakeholder can validate the full UX without a Figma account ("Anyone with the link" share setting)

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show a screen recording of clicking through at least 2 complete prototype flows in Figma.
> PRs without visual proof will not be reviewed or merged.

---

### #112 Design Figma mobile screens — responsive layouts for all modules

**Label:** 🎨 design
**Branch:** `design/figma-mobile-screens`
**Timeframe:** 2 days

**Description:**
Issue #101 defines the responsive behaviour rules. This issue produces the actual Figma mobile frames (390×844) for every module so the frontend engineer has a pixel-perfect reference for the mobile layout. Mobile is not just "shrunk desktop" — it requires different layout patterns (bottom nav, stacked cards, full-screen panels).

**Tasks:**
- Design **390×844** mobile frames for every screen:
  - Dashboard (bottom nav bar, stacked stat cards 2×2, single-column lists)
  - Patient List (stacked card layout, search bar full width)
  - Patient Detail (single column, tabs as horizontal scroll)
  - Create Patient (full-screen slide-over, single-column form)
  - Encounter List (stacked card layout)
  - Encounter Detail (single column, collapsible sections)
  - Log Encounter multi-step form (full screen, step indicator at top)
  - Payment List (stacked card layout)
  - Confirm Payment modal (full screen)
  - Settings (tab bar at top instead of left sub-nav)
- Bottom navigation bar: 4 icons (Dashboard, Patients, Encounters, Payments) + "More" overflow, active state with label, inactive icon-only
- Annotate all touch targets as minimum 44×44px

**Acceptance Criteria:**
- Mobile frames exist for all 10 listed screens in `Screens/Mobile`
- Bottom navigation bar designed with active and inactive states
- Tables replaced with stacked card layouts on all mobile screens
- Slide-overs and modals are full-screen on mobile frames
- All touch targets annotated as ≥ 44×44px
- Figma link added as a comment on issue #101

**Verification:**
> 📸 A screenshot **or** 🎥 a screen recording must be attached to the PR for this issue.
> The media must show the mobile frames for at least the Dashboard, Patient List, and Encounter List screens.
> PRs without visual proof will not be reviewed or merged.

---

*Total: 112 issues — Backend (43) · Frontend (14) · Infra (24) · Security (9) · Design (12) · Figma UI/UX (10)*
