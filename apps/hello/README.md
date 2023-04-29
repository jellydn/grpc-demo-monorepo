# Welcome to hello world 👋

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: jellydn](https://img.shields.io/twitter/follow/jellydn.svg?style=social)](https://twitter.com/jellydn)

> Demo RPC app with NodeJS

This is the simple implementation of hello world RPC from [gRPC nodejs example](https://github.com/grpc/grpc/blob/master/examples/node/dynamic_codegen/README.md) but has some improvements over the existing:

- Support for type generation
- [Typescript support](https://github.com/grpc/grpc-node/blob/master/packages/proto-loader/README.md#example-usage)

## Usage

Open RPC server on a terminal

```sh
yarn dev
```

Then send a message to RPC from CLI

```sh
yarn cli hello --user "IT Man Channel" --server 0.0.0.0:50051
```

## Author

👤 **Dung Huynh**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

