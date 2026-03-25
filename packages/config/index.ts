import dotenv from "dotenv";
import path from "path";
import { validateStartupSecrets, logSecretsStatus } from "./secrets-validator";

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(__dirname, "../../.env") });
}

validateStartupSecrets();

const network = process.env.STELLAR_NETWORK || "testnet";
const horizonUrl = network === "mainnet"
  ? "https://horizon.stellar.org"
  : "https://horizon-testnet.stellar.org";

export const config = {
  apiPort:  process.env.API_PORT || "3001",
  nodeEnv:  process.env.NODE_ENV || "development",
  mongoUri: process.env.MONGO_URI || "",
  jwt: {
    accessTokenSecret:  process.env.JWT_ACCESS_TOKEN_SECRET  || "",
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || "",
  },
  stellarNetwork:    network,
  stellarHorizonUrl: horizonUrl,
  stellarSecretKey:  process.env.STELLAR_SECRET_KEY || "",
  stellar: {
    network,
    horizonUrl,
    secretKey:         process.env.STELLAR_SECRET_KEY          || "",
    platformPublicKey: process.env.STELLAR_PLATFORM_PUBLIC_KEY || "",
  },
  geminiApiKey: process.env.GEMINI_API_KEY || "",
};

if (["development", "staging"].includes(process.env.NODE_ENV || "development")) {
  logSecretsStatus();
}
