import * as grpc from "@grpc/grpc-js";

import { proto } from "./grpc";
import logger from "./logger";
import { GreeterHandlers } from "./protos/helloworld/Greeter";

/**
 * Implements the SayHello RPC method.
 */
const greeterHandler: GreeterHandlers = {
  SayHello: (call, callback) => {
    logger.grpcLogger.info("receive message", call.request);
    callback(null, { message: "Hello " + call.request.name });
  },
};

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  const server = new grpc.Server();
  server.addService(proto.helloworld.Greeter.service, greeterHandler);
  logger.grpcLogger.info("binding greeterHandler to server");
  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    () => {
      logger.info("Grpc Server ready - started server on 0.0.0.0:50051");
      server.start();
    }
  );
}

main();
