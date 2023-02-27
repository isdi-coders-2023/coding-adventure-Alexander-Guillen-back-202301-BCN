import morgan from "morgan";
import express from "express";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorsMiddlewares.js";

const app = express();

app.use(morgan("dev"));

app.use(notFoundError);
app.use(generalError);

export default app;
