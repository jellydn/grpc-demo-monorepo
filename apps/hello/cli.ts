import { cac } from "cac";

import { helloworld, protoClient } from "./gen/client";
import logger from "./logger";

const cli = cac();

// Usage: yarn cli hello --user "Dung Huynh" --server 0.0.0.0:50051
cli
  .command("hello", "say hello your friend")
  .option("--user <user>", "a user name", {
    default: "world",
  })
  .option("--server <server>", "Set server", { default: "0.0.0.0:50051" })
  .example("--server 0.0.0.0:50051")
  .action((options) => {
    logger.info({
      options,
    });
  });

cli.help();

const parsed = cli.parse();

logger.info(JSON.stringify(parsed, null, 2));

protoClient.configureClient({ endpoint: parsed.options.server });

async function main() {
  try {
    const response = await helloworld.Greeter.SayHello({
      name: parsed.options.user,
    });
    logger.info("Greeting:", response?.result?.message);
  } catch (error) {
    logger.error(error);
  }
}

main().catch(logger.error);
