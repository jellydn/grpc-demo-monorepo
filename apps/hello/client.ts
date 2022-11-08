import { cac } from "cac";
import * as grpc from "@grpc/grpc-js";

import logger from "./logger";
import { proto } from "./grpc";

const cli = cac();

// Usage: yarn cli hello --user "Dung Huynh"
cli
  .command("hello", "say hello your friend")
  .option("--user <user>", "a user name", {
    default: "world",
  })
  .option("--server <server>", "Set server", { default: "0.0.0.0:50051" })
  .example("--server 0.0.0.0:50051")
  .action((options) => {
    console.log(options);
  });

cli.help();

const parsed = cli.parse();

logger.info(JSON.stringify(parsed, null, 2));

const client = new proto.helloworld.Greeter(
  parsed.options.server,
  grpc.credentials.createInsecure()
);

client.sayHello({ name: parsed.options.user }, function (err, response) {
  if (err) {
    logger.error(err);
  }
  logger.info("Greeting:", response?.message);
});
