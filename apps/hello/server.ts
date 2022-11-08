import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import logger from "./logger";
// support types generator, refer https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md#example-usage
import { ProtoGrpcType } from "./protos/hello";
import { GreeterHandlers } from "./protos/helloworld/Greeter";

const PROTO_PATH = __dirname + "/protos/hello.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

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
      logger.info("ready - started server o 0.0.0.0:50051");
      server.start();
    }
  );
}

main();
