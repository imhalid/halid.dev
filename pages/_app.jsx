import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import { seo } from '../util/seo'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <AnimatePresence initial={false}>
          <DefaultSeo {...seo} />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default MyApp
