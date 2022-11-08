import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
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
export const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;
