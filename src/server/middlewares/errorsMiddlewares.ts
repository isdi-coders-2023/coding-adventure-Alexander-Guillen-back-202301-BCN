import "../../loadEnvironment.js";
import createDebug from "debug";
import chalk from "chalk";
import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";

const debug = createDebug("coding-adventure-back:server:middlewares:errors");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError("Path not found", 404, "Endpoint not found");

  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const publicMessage = error.publicMessage || "Ha petat tot";

  debug(chalk.red(error.message));

  res.status(statusCode).json({ error: publicMessage });
};
