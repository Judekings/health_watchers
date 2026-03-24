// Must be imported before any other modules to ensure Sentry instruments correctly
import './instrument';

import * as Sentry from '@sentry/node';
import express from "express";
import { config } from "@health-watchers/config";
import authRoutes from "./modules/auth/auth.routes";
import patientRoutes from "./modules/patients/patients.routes";
import encounterRoutes from "./modules/encounters/encounters.routes";
import paymentRoutes from "./modules/payments/payments.routes";
import aiRoutes from "./modules/ai/ai.routes";
import { startUptimeMonitor } from "./monitoring/uptime";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok", service: "health-watchers-api" }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/encounters", encounterRoutes);
app.use("/api/v1/payments", paymentRoutes);
app.use("/api/v1/ai", aiRoutes);

// Sentry error handler must be registered after all routes
Sentry.setupExpressErrorHandler(app);

// Fallback error handler — catches anything Sentry didn't swallow
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'InternalServerError', message: 'An unexpected error occurred' });
});

app.listen(config.apiPort, () => {
  console.log(`Health Watchers API running on port ${config.apiPort}`);
  if (process.env.NODE_ENV === 'production') {
    startUptimeMonitor(60);
  }
});

export default app;
