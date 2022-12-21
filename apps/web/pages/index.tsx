import { Toaster } from "react-hot-toast";

import HelloConnectApp from "../components/HelloConnectApp";
import HelloGrpcApp from "../components/HelloGrpcApp";

export default function Web() {
  return (
    <div>
      <h1>Hello Connect Web</h1>
      <HelloConnectApp />

      <h1>Hello Grpc Web</h1>
      <HelloGrpcApp />

      <Toaster />
    </div>
  );
}
