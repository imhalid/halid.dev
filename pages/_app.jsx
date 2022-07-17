import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { DefaultSeoProps } from "next-seo";
import { seo } from "../util/seo";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <AnimatePresence exitBeforeEnter initial={false}>
          <DefaultSeoProps {...seo} />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
