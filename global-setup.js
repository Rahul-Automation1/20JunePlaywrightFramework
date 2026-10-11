import fs from "fs";
import os from "os";
import path from "path";
import env from "./config/env.config.js";

const resultsDir = path.join(process.cwd(), "reports", "allure-results");
fs.mkdirSync(resultsDir, { recursive: true });

const properties = [
  `environment=${env.name}`,
  `baseURL=${env.baseURL}`,
  `browser=chromium`,
  `headless=${env.headless}`,
  `os=${process.platform} ${os.release()}`,
  `nodeVersion=${process.version}`,
  `timestamp=${new Date().toISOString()}`,
];

fs.writeFileSync(
  path.join(resultsDir, "environment.properties"),
  `${properties.join("\n")}\n`,
  "utf8",
);

export default async function globalSetup() {
  // Keep the environment data in the generated Allure results folder.
}
