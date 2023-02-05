import {
  createGrpcTransport,
  createPromiseClient,
} from "@bufbuild/connect-node";
import express from "express";

import logger from "./logger";
import { Greeter } from "./types/protos/hello_connectweb";

const transport = createGrpcTransport({
  baseUrl: "http://localhost:50053",
  httpVersion: "2",
});

const client = createPromiseClient(Greeter, transport);

const app = express();
app.disable("x-powered-by");

app.get("/", async (req, res) => {
  const name = String(req.query?.name ?? "world");
  const { message } = await client.sayHello({ name });
  logger.apiLogger.info("Greeting:", message);
  res.json({ message });
});

const PORT = 3003;
app.listen(PORT, () => {
  logger.info(
    "Client Server listening to port %d, url: http://localhost:%d",
    PORT,
    PORT
  );
});
