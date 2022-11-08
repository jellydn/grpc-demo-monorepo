import express from "express";
import * as grpc from "@grpc/grpc-js";

import { proto } from "./grpc";
import logger from "./logger";

const client = new proto.helloworld.Greeter(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure()
);
const app = express();
app.disable("x-powered-by");

app.get("/", (req, res) => {
  const name = req.query?.name ?? "world";
  client.sayHello({ name }, function (err, response) {
    if (err) {
      throw err;
    }
    logger.apiLogger.info("Greeting:", response?.message);
    res.json(response);
  });
});

const PORT = 3002;
app.listen(PORT, () => {
  logger.info(
    "Client Server listening to port %d, url: http://localhost:%d",
    PORT,
    PORT
  );
});
