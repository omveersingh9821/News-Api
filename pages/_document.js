import { Html, Head, Main, NextScript } from 'next/document'




export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="this app fetch data from news api and embeded into frontend" />
          <meta name="keywords" content= "News, API, Next.js" />
          <title>News App</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
