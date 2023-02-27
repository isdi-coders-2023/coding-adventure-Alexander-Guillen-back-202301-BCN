import "../loadEnvironment.js";
import app from "./index.js";

const startServer = async (port: number): Promise<void> =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

export default startServer;
