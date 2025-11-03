import dotenv from "dotenv";
import { defineConfig } from "prisma/config";

dotenv.config();

const FALLBACK_DATABASE_URL = "mongodb://127.0.0.1:27017/prisma-app";
const databaseUrl = process.env.DATABASE_URL ?? FALLBACK_DATABASE_URL;

if (!process.env.DATABASE_URL) {
  console.warn(
    `DATABASE_URL is not set. Falling back to the local connection string "${FALLBACK_DATABASE_URL}".`
  );
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: databaseUrl,
  },
});
