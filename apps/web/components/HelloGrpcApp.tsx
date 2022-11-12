import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "ui";

export default function HelloConnectApp() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await fetch("/api/grpc", {
              method: "POST",
              body: JSON.stringify({ name: inputValue }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (response.ok) {
              const result = await response.json();
              toast.success(JSON.stringify(result));
            } else {
              toast.error("Oops! Something went wrong.");
            }
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
