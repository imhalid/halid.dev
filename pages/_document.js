import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className="dark:bg-neutral-900 bg-neutral-100 h-screen
       selection:bg-blue-100/30 selection:text-blue-500
       dark:selection:bg-blue-300/10 dark:selection:text-blue-400
       "
      >
        <svg
          id="texture"
          width="100%"
          height="100%"
          className="pointer-events-none fixed isolate z-50 opacity-40 mix-blend-soft-light"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="10"
              stitchTiles="stitch"
            ></feTurbulence>
            //https://fecolormatrix.com/
            <feColorMatrix
              className="hidden dark:visible"
              type="saturate"
              values="0"
            ></feColorMatrix>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
