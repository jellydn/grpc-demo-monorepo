// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=ts"
// @generated from file protos/hello.proto (package helloworld, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { HelloReply, HelloRequest } from "./hello_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * The greeting service definition.
 *
 * @generated from service helloworld.Greeter
 */
export const Greeter = {
  typeName: "helloworld.Greeter",
  methods: {
    /**
     * Sends a greeting
     *
     * @generated from rpc helloworld.Greeter.SayHello
     */
    sayHello: {
      name: "SayHello",
      I: HelloRequest,
      O: HelloReply,
      kind: MethodKind.Unary,
    },
  }
} as const;

