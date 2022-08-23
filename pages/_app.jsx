import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { seo } from "../util/seo";
import Script from "next/script";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <DefaultSeo {...seo} />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
          </Script>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
