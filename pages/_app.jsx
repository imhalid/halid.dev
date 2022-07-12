import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Head></Head>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
