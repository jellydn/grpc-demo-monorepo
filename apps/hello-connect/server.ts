import { createHandler, mergeHandlers } from "@bufbuild/connect-node";
import * as http2 from "http2";

import logger from "./logger";
import { Greeter } from "./types/protos/hello_connectweb";

/**
 * Implements the SayHello RPC method.
 */
const greeterHandler = createHandler(
  Greeter,
  Greeter.methods.sayHello,
  async (req) => {
    logger.grpcLogger.info("receive message", req.name);
    return {
      message: `Hello ${req.name}`,
    };
  }
);

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  http2
    .createServer(
      mergeHandlers([greeterHandler]) // responds with 404 for other requests
    )
    .listen(50053, () => {
      logger.info("Grpc Server ready - started server on 0.0.0.0:50053");
    });
}

main();
