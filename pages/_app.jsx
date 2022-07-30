import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { seo } from "../util/seo";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <DefaultSeo {...seo} />
          <GoogleAnalytics />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
