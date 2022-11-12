import { useState } from "react";
import { Button } from "ui";
import {
  createConnectTransport,
  createPromiseClient,
} from "@bufbuild/connect-web";

// Import service definition that you want to connect to.
import { GreetService } from "hello-go/types/greet/v1/greet_connectweb";

// The transport defines what type of endpoint we're hitting.
// In our example we'll be communicating with a Connect endpoint.
const transport = createConnectTransport({
  baseUrl: "http://localhost:8080", // this is calling connect-go server
});

// Here we make the client itself, combining the service
// definition with the transport.
const client = createPromiseClient(GreetService, transport);

function HelloApp() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const result = await client.greet({
              name: inputValue,
            });
            console.log(result);
          } catch (error) {
            alert(JSON.stringify(error));
          }
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button name="send" type="submit" />
      </form>
    </>
  );
}

export default function Web() {
  return (
    <div>
      <h1>Connect Web</h1>
      <HelloApp />
    </div>
  );
}
