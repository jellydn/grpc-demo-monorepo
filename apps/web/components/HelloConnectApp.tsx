import { useState } from "react";
import { Button } from "ui";
import toast from "react-hot-toast";

import { createConnectTransport } from "@bufbuild/connect-web";
import { createPromiseClient } from "@bufbuild/connect";

// Import service definition that you want to connect to.
import { GreetService } from "hello-go/types/greet/v1/greet_connectweb";

// The transport defines what type of endpoint we're hitting.
// In our example we'll be communicating with a Connect endpoint.
const transport = createConnectTransport({
  baseUrl: "http://localhost:8080", // this is calling connect-go server
});

// Here we make the client itself, combining the service
// definition with the transport.
export const client = createPromiseClient(GreetService, transport);

export default function HelloConnectApp() {
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
            toast.success(JSON.stringify(result));
          } catch (error) {
            toast.error(JSON.stringify(error));
          }
        }}
      >
        <input
          value={inputValue}
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button name="Send" type="submit" />
      </form>
    </>
  );
}
