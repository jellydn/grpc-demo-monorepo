import * as grpc from "@grpc/grpc-js";
import express from "express";

import { createGrpcClient } from "./connect-node-extra/create-grpc-client";
import logger from "./logger";
import { Greeter } from "./types/protos/hello_connectweb";

const client = createGrpcClient(Greeter, {
  address: "0.0.0.0:50052",
  channelCredentials: grpc.ChannelCredentials.createInsecure(),
  clientOptions: {},
  binaryOptions: {},
});

const app = express();
app.disable("x-powered-by");

app.get("/", (req, res) => {
  const name = String(req.query?.name ?? "world");
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
