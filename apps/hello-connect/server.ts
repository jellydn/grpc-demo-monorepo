import { ConnectRouter } from "@bufbuild/connect";
import { connectNodeAdapter } from "@bufbuild/connect-node";
import * as http2 from "http2";

import logger from "./logger";
import { Greeter } from "./types/protos/hello_connect";

/**
 * Implements the SayHello RPC method.
 */
const routes = (router: ConnectRouter) =>
  router.service(Greeter, {
    async sayHello(req) {
      logger.grpcLogger.info("receive message", req.name);
      return {
        message: `Hello ${req.name}`,
      };
    },
  });

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  http2.createServer(connectNodeAdapter({ routes })).listen(50053, () => {
    logger.info("Grpc Server ready - started server on 0.0.0.0:50053");
  });
}

main();
