import { Html, Head, Main, NextScript } from 'next/document'
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={notojp.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
