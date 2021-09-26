import { logger } from "./utils";
import App from "./app";

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  // todo add cleanup logic
  process.exit();
});

process.on("SIGINT", () => {
  logger.info("SIGINT received");
  // todo add cleanup logic
  process.exit();
});

const app = new App();

app.listen();
