import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/globals.css";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      url !== Router.asPath && setIsLoading(true);
    };

    const handleComplete = (url) => {
      url === Router.asPath && setIsLoading(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
  });

  return (
    <>
      <Head>
        <title>Medatachi - Read, Learn, Earn</title>
        <meta
          name="description"
          content="Read, learn and earn. Learn all you need to kickstart your tech career and earn at the same time"
        />
        <meta name="theme-color" content="#805AD5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        {isLoading ? <Loader /> : <Component {...pageProps} />}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
