import "./loadEnvironment.js";
import createDebug from "debug";
import connectDatabase from "./database/connectDatabase.js";
import startServer from "./server/startServer.js";
import chalk from "chalk";

const debug = createDebug("coding-adventure-back:root");

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGODB_CONNECTION_URL;

try {
  await connectDatabase(mongoDbUrl!);
  debug(chalk.green("Connected to database"));

  await startServer(+port);
  debug(chalk.blue(`Server listening on http://localhost:${port}`));
} catch (error: unknown) {
  debug(chalk.red((error as Error).message));

  process.exit(1);
}
