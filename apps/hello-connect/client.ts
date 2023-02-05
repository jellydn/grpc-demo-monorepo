import {
  createGrpcTransport,
  createPromiseClient,
} from "@bufbuild/connect-node";
import { cac } from "cac";

import logger from "./logger";
import { Greeter } from "./types/protos/hello_connectweb";

const cli = cac();

// Usage: yarn cli hello --user "Dung Huynh"
cli
  .command("hello", "say hello your friend")
  .option("--user <user>", "a user name", {
    default: "world",
  })
  .option("--server <server>", "Set server", { default: "0.0.0.0:50053" })
  .example("--server 0.0.0.0:50053")
  .action((options) => {
    console.log(options);
  });

cli.help();

const parsed = cli.parse();

logger.info(JSON.stringify(parsed, null, 2));

const transport = createGrpcTransport({
  baseUrl: "http://localhost:50053",
  httpVersion: "2",
});

const client = createPromiseClient(Greeter, transport);

async function main() {
  const { message } = await client.sayHello({ name: parsed.options.user });
  logger.info("Greeting:", message);
}

main().catch(logger.error);
