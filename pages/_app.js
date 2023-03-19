import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Toolbar from "@/components/Toolbar";
import styles from '../styles/globals.css';
import Head from "next/head";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="this app fetch data from news api and embeded into frontend" />
        <meta name="keywords" content="News, API, Next.js" />
        <title>News App</title>
      </Head>
      <Toolbar />
      <Component {...pageProps} />

    </>
  )
 
}
