.PHONY: install-cli
install-cli:
	@echo "Installing CLI..."
	go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
	go install connectrpc.com/connect/cmd/protoc-gen-connect-go@latest
	go install github.com/twitchtv/twirp/protoc-gen-twirp@latest
