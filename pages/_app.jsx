import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider attribute="class">
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
