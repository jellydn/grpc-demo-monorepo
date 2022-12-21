import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
