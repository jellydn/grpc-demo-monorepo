# Welcome to hello Connect service in Go

## Prerequisites

- node >=18.0.0
- go >= 1.19

```sh
 go install github.com/bufbuild/buf/cmd/buf@latest
 go install github.com/fullstorydev/grpcurl/cmd/grpcurl@latest
 go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
 go install github.com/bufbuild/connect-go/cmd/protoc-gen-connect-go@latest
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

