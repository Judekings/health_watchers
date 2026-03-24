import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const network = process.env.STELLAR_NETWORK || "testnet";
const horizonUrl =
  network === "mainnet"
    ? "https://horizon.stellar.org"
    : "https://horizon-testnet.stellar.org";

export const config = {
  apiPort:            process.env.API_PORT           || "4000",
  mongoUri:           process.env.MONGO_URI          || "",
  stellarNetwork:     network,
  stellarHorizonUrl:  horizonUrl,
  stellarSecretKey:   process.env.STELLAR_SECRET_KEY || "",
  geminiApiKey:       process.env.GEMINI_API_KEY     || "",
  // kept for any legacy references
  jwtSecret:          process.env.JWT_SECRET         || "",
  jwt: {
    accessTokenSecret:  process.env.JWT_ACCESS_SECRET  || process.env.JWT_SECRET || "",
    refreshTokenSecret: process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET || "",
  },
};
