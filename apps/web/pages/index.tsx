import Head from "next/head";
import HelloConnectApp from "../components/HelloConnectApp";

export default function Web() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
      </Head>
      <h1>Connect Web</h1>
      <HelloConnectApp />
    </div>
  );
}
