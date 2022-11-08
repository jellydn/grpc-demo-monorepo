import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GreeterClient as _helloworld_GreeterClient, GreeterDefinition as _helloworld_GreeterDefinition } from './helloworld/Greeter';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  helloworld: {
    Greeter: SubtypeConstructor<typeof grpc.Client, _helloworld_GreeterClient> & { service: _helloworld_GreeterDefinition }
    HelloReply: MessageTypeDefinition
    HelloRequest: MessageTypeDefinition
  }
}

