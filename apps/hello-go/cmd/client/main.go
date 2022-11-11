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
	// Usage 1: use connect protocol
	// client := greetv1connect.NewGreetServiceClient(
	// 	http.DefaultClient,
	// 	"http://localhost:8080",
	// )

	// user grpc protocol
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
