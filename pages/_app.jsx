import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence initial={false}>
      <ThemeProvider attribute="class">
        <Head></Head>
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
