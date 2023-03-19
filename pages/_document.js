import { Html, Head, Main, NextScript } from 'next/document'


export const meta = {
  title: "Page Title",
  description: "Page Description",
  keywords: "News, API, Next.js",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords} />
          <title>News App</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
