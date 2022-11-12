import * as grpc from "@grpc/grpc-js";
import { createGrpcClient } from "modern-hello/connect-node-extra/create-grpc-client";
// Import service definition that you want to connect to.
import { Greeter } from "modern-hello/types/protos/hello_connectweb";
import type { NextApiRequest, NextApiResponse } from "next";

// Here we make the client itself, combining the service
// definition with the transport.
const client = createGrpcClient(Greeter, {
  address: "0.0.0.0:50052",
  channelCredentials: grpc.ChannelCredentials.createInsecure(),
  clientOptions: {},
  binaryOptions: {},
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  client.sayHello(data, (err, response) => {
    if (err) {
      throw err;
    }

    res.json(response);
  });
}
