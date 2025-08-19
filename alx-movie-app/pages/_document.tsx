import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="manifest" href="/manifest.json"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
<meta name="msapplication-TileImage" content="/icons/ms-icon-310x310.png" />
        <meta name="theme-color" content="#0070f3" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
