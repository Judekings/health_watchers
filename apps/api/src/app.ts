import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { config } from "@health-watchers/config";
import { authRoutes } from "./modules/auth/auth.controller";
import { patientRoutes } from "./modules/patients/patients.controller";
import { encounterRoutes } from "./modules/encounters/encounters.controller";
import { paymentRoutes } from "./modules/payments/payments.controller";
import aiRoutes from "./modules/ai/ai.routes";
import { setupSwagger } from "./docs/swagger";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";

const app = express();

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "http://localhost:3000")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      callback(Object.assign(new Error("Not allowed by CORS"), { status: 403 }));
    },
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json());

app.get("/health", (_req, res) =>
  res.json({ status: "ok", service: "health-watchers-api" })
);

app.use("/api/v1/auth",       authRoutes);
app.use("/api/v1/patients",   patientRoutes);
app.use("/api/v1/encounters", encounterRoutes);
app.use("/api/v1/payments",   paymentRoutes);
app.use("/api/v1/ai",         aiRoutes);
app.use("/api/v1/dashboard",  dashboardRoutes);

setupSwagger(app);

// Global error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ error: "InternalError", message: err.message || "Something went wrong" });
});

app.listen(config.apiPort, () => {
  console.log(`Health Watchers API running on port ${config.apiPort}`);
});

export default app;
