// Usage: go run ./cmd/serer/main.go
package main

import (
	helloserver "hello-twirp/internal/hello"
	helloservice "hello-twirp/rpc/hello"
	"log"
	"net/http"
)

func main() {
	server := &helloserver.Server{} // implements Hello interface
	twirpHandler := helloservice.NewGreetServiceServer(server)

	log.Println("Ready - Server is running at localhost:8081")
	http.ListenAndServe(":8081", twirpHandler)
}
