// Usage: go run ./cmd/serer/main.go
package main

import (
	"context"
	helloservice "hello-twirp/rpc/hello"
	"log"
	"net/http"
)

func main() {
	client := helloservice.NewGreetServiceProtobufClient("http://localhost:8081", &http.Client{})

	res, err := client.Greet(
		context.Background(),
		&helloservice.GreetRequest{Name: "IT Man"},
	)

	if err != nil {
		log.Println(err)
		return
	}

	log.Println(res.Greeting)
}
