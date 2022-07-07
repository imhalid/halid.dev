import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/assets/favicon.png?v=1" />
        <meta name="theme-color" content="#fff" />
      </Head>

      <body className="dark:bg-neutral-900">
        <svg
          class="pointer-events-none fixed isolate z-50 opacity-30 mix-blend-soft-light"
          width="100%"
          height="100%"
        >
          <filter id="roughpaper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              result="noise"
              numOctaves="5"
            />

            <feDiffuseLighting
              in="noise"
              lighting-color="white"
              surfaceScale="2"
            >
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
          </filter>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            filter="url(#roughpaper)"
            fill="none"
          ></rect>
        </svg>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
