import * as grpc from "@grpc/grpc-js";

import { addGrpcService } from "./connect-node-extra/add-grpc-service";
import logger from "./logger";
import { Greeter } from "./types/protos/hello_connectweb";

/**
 * Implements the SayHello RPC method.
 */
const greeterHandler = {
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
  // @ts-expect-error connect-node is ready yet, workaround for now, refer https://github.com/bufbuild/protobuf-es/issues/252
  addGrpcService(server, Greeter, greeterHandler);
  logger.grpcLogger.info("binding greeterHandler to server");
  server.bindAsync(
    "0.0.0.0:50052",
    grpc.ServerCredentials.createInsecure(),
    (err) => {
      if (err) {
        logger.error(err);
        return;
      }
      server.start();
      logger.info("Grpc Server ready - started server on 0.0.0.0:50052");
    }
  );
}

main();
