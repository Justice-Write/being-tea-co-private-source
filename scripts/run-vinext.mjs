import { spawnSync } from "node:child_process";
const [, , command, ...args] = process.argv;
if (!["dev", "build", "start"].includes(command)) throw new Error("Expected dev, build or start");
const result = spawnSync(process.execPath, ["node_modules/vinext/dist/cli.js", command, ...args], {
  stdio: "inherit", env: { ...process.env, WRANGLER_LOG_PATH: process.env.WRANGLER_LOG_PATH || ".wrangler/wrangler.log" }
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
