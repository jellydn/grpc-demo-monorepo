# Welcome to hello Twirp service in Go

## Install Twirp and Protobuf Generators

Set GOBIN (see go help environment) to define where the tool dependencies will
be installed. For example, if you have a /bin folder in your project:

```sh
export GOBIN=$PWD/bin 
```

The installed packages need to be accessible by the protoc
compiler. You might need to add GOBIN to your PATH:

```sh
export PATH=$GOBIN:$PATH
```

## Install generators:

```sh
go install github.com/twitchtv/twirp/protoc-gen-twirp@latest go install
google.golang.org/protobuf/cmd/protoc-gen-go@latest
```

## Getting Started

Run the development server:

```sh
go run ./cmd/server/main.go
```

Then open a new terminal

```sh
go run ./cmd/client/main.go
```

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
