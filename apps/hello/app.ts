import express from "express";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import logger from "./logger";
// support types generator, refer https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md#example-usage
import { ProtoGrpcType } from "./protos/hello";

const PROTO_PATH = __dirname + "/protos/hello.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as ProtoGrpcType;

const client = new proto.helloworld.Greeter(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure(),
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
  logger.info("Client Server listening to port http://0.0.0.0:%d", PORT);
});
