gen:
	protoc --proto_path=. --twirp_out=. --go_out=. rpc/hello/service.proto

server:
	go run ./cmd/server/main.go

client:
	go run ./cmd/client/main.go

upgrade:
	go get -u
