# Welcome to gRPC-Demo-Apps 👋

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Grpc Demo Apps with Go/NodeJS

## Prerequisites

- node >=18.0.0
- go >= 1.19
- [protoc](https://grpc.io/docs/protoc-installation/): Protocol Buffer Compiler Installation
- [buf](https://github.com/bufbuild/buf):A new way of working with Protocol
  Buffers.
- [grpcurl](https://github.com/fullstorydev/grpcurl): Like cURL, but for gRPC:
  Command-line tool for interacting with gRPC servers

## Install

```sh
yarn install
```

## Generate code from `.proto` files

```sh
yarn proto:types
```

## Usage

```sh
yarn dev
```

## Applications

- hello: simple Typescript implementation of hello world RPC from gRPC nodejs
  [example](https://github.com/grpc/grpc/blob/master/examples/node/dynamic_codegen/README.md).

![https://gyazo.com/23244180cb415bbc57bebbf4e9599a74.gif](https://gyazo.com/23244180cb415bbc57bebbf4e9599a74.gif)

- hello-go: small
  [Connect service](https://connect.build/docs/go/getting-started) with Go.

![https://gyazo.com/ac564703c07b4e011e6bbe7883ee021d.gif](https://gyazo.com/ac564703c07b4e011e6bbe7883ee021d.gif)

- hello-connect: small
  [Connect service](https://connect.build/docs/go/getting-started) with [NodeJs](https://github.com/bufbuild/connect-web/tree/main/packages/connect-node).
  - [ ] Add record gif for the demo

- hello-twirp: hello service written in Go with
  [twirp](https://twitchtv.github.io/twirp/).

![https://gyazo.com/ba2f444ff2bc17ad25ebce84eae4ef7f.gif](https://gyazo.com/ba2f444ff2bc17ad25ebce84eae4ef7f.gid)

- modern-hello: the rewrite version of hello app with
  [protobuf-es](https://github.com/bufbuild/protobuf-es)

![https://gyazo.com/527ea9740b4c94a6acee0d81917cd355.gif](https://gyazo.com/527ea9740b4c94a6acee0d81917cd355.gif)

- web: a hello nextjs 13 app with 2 Grpc services

![https://gyazo.com/e80cc51056ad95f0cf51869d3d5b3d20.gif](https://gyazo.com/e80cc51056ad95f0cf51869d3d5b3d20.gif)

More detail of each readme file on each application.

## Resources

- [grpc](https://grpc.io/): A high performance, open source universal RPC framework.
- [twirp](https://github.com/twitchtv/twirp): A simple RPC framework with protobuf service definitions.
- [protobuf-es](https://github.com/bufbuild/protobuf-es):Protocol Buffers for ECMAScript.
- [connect-web](https://github.com/bufbuild/connect-web): Simple, reliable, interoperable. A better gRPC-Web.
- [connect-go](https://github.com/bufbuild/connect-go): Simple, reliable, interoperable. A better gRPC.
- [@grpc/grpc-js](https://github.com/grpc/grpc-node/tree/master/packages/grpc-js): Pure JavaScript gRPC Client
- [@grpc/proto-loader](https://github.com/grpc/grpc-node/tree/master/packages/proto-loader): A utility package for loading .proto files for use with gRPC, using the latest Protobuf.js package.
- [grpc-web](https://github.com/improbable-eng/grpc-web): gRPC Web implementation for Golang and TypeScript
- [proto-client](https://github.com/codenothing/proto-client): A typed gRPC Client with static code generation
- [deeplay-io/nice-grpc](https://github.com/deeplay-io/nice-grpc): A TypeScript gRPC library that is nice to you
- [SafetyCulture/grpc-web-devtools](https://github.com/SafetyCulture/grpc-web-devtools): Chrome & Firefox Browser extension to aid gRPC-Web development

## Useful References

- [What is RPC? gRPC Introduction.](https://www.youtube.com/watch?v=gnchfOojMk4&ab_channel=ByteByteGo)
- [Building a secure API with gRPC](https://snyk.io/blog/building-a-secure-api-with-grpc/)
- [Connect: A better gRPC](https://buf.build/blog/connect-a-better-grpc)
- [Protobuf-ES: The Protocol Buffers TypeScript/JavaScript runtime we all deserve](https://buf.build/blog/protobuf-es-the-protocol-buffers-typescript-javascript-runtime-we-all-deserve)
- [Twirp: a sweet new RPC framework for Go](https://blog.twitch.tv/en/2018/01/16/twirp-a-sweet-new-rpc-framework-for-go-5f2febbf35f/)
- [When to use gRPC vs GraphQL - Stack Overflow Blog](https://stackoverflow.blog/2022/11/28/when-to-use-grpc-vs-graphql/)
- [Building a modern gRPC-powered microservice using Node.js, Typescript, and Connect — Dopt](https://blog.dopt.com/building-a-modern-grpc-powered-microservice)

### How does gPRC Work?

Thank you for the excellent image from
[bytebytego](https://blog.bytebytego.com).

![grpc](grpc.jpeg)

## Author

👤 **Dung Huynh**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)

[![Stargazers repo roster for @jellydn/grpc-demo-monorepo](https://reporoster.com/stars/jellydn/grpc-demo-monorepo)](https://github.com/jellydn/grpc-demo-monorepo/stargazers)

Give a ⭐️ if this project helped you!

