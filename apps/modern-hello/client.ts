import * as grpc from "@grpc/grpc-js";
import { cac } from "cac";

import { createGrpcClient } from "./connect-node-extra/create-grpc-client";
import logger from "./logger";
import { Greeter } from "./types/protos/hello_connectweb";

const cli = cac();

// Usage: yarn cli hello --user "Dung Huynh"
cli
  .command("hello", "say hello your friend")
  .option("--user <user>", "a user name", {
    default: "world",
  })
  .option("--server <server>", "Set server", { default: "0.0.0.0:50052" })
  .example("--server 0.0.0.0:50052")
  .action((options) => {
    console.log(options);
  });

cli.help();

const parsed = cli.parse();

logger.info(JSON.stringify(parsed, null, 2));

const client = createGrpcClient(Greeter, {
  address: parsed.options.server,
  channelCredentials: grpc.ChannelCredentials.createInsecure(),
  clientOptions: {},
  binaryOptions: {},
});

client.sayHello({ name: parsed.options.user }, function (err, response) {
  if (err) {
    logger.error(err);
  }
  logger.info("Greeting:", response?.message);
});
