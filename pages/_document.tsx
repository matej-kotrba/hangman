import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <meta
        name="description"
        content="Play the hangman with random english words, made by mkit2009 ( Matěj Kotrba )"
      ></meta>
      <meta
        name="keywords"
        content="Hangman, Guess, Word, English, Random, Matěj Kotrba, matej kotrba"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0"
      ></meta>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="./favicon.ico?v=2" />
      <link
        rel="icon"
        type="image/ico"
        href="./favicon.ico?v=2"
        sizes="50x50"
      />
      <link
        rel="apple-touch-icon"
        href="./favicon.ico?v=2"
        sizes="50x50"
      ></link>
      <meta property="og:title" content="Play the hangman game." />
      <meta
        property="og:description"
        content="Guess random english words."
      ></meta>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
