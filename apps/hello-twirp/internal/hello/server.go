// Internal package for hello service
package helloserver

import (
	"context"
	"fmt"
	helloservice "hello-twirp/rpc/hello"
	"log"

	"github.com/twitchtv/twirp"
)

// Service implements the hello service
type Server struct{}

func (s *Server) Greet(ctx context.Context, req *helloservice.GreetRequest) (*helloservice.GreetResponse, error) {
	log.Println("Imcoming request", req)

	// throw error if name is less than 3 characters
	if len(req.Name) < 3 {
		return nil, twirp.InvalidArgumentError("Name", "Can't be less than 3 characters'")
	}

	return &helloservice.GreetResponse{Greeting: fmt.Sprintf("Hello, %s!", req.Name)}, nil
}
