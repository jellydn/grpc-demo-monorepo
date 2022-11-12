// Usage: go run ./cmd/client/main.go
package main

import (
	"context"
	"log"
	"net/http"

	greetv1 "hello-go/gen/greet/v1"
	"hello-go/gen/greet/v1/greetv1connect"

	"github.com/bufbuild/connect-go"
)

func main() {
	// Uncomment this block if you want to to use Connect protocol intead of Gprc
	// Usage 1: use connect protocol
	// client := greetv1connect.NewGreetServiceClient(
	// 	http.DefaultClient,
	// 	"http://localhost:8080",
	// )

	// Usage 2: use grpc protocol
	client := greetv1connect.NewGreetServiceClient(
		http.DefaultClient,
		"http://localhost:8080",
		connect.WithGRPC(),
	)

	res, err := client.Greet(
		context.Background(),
		connect.NewRequest(&greetv1.GreetRequest{Name: "IT Man Channel"}),
	)

	if err != nil {
		log.Println(err)
		return
	}
	log.Println(res.Msg.Greeting)
}
