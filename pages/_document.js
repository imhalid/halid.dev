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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons//favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons//favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <body className="dark:bg-neutral-900 h-screen">
        <svg
          className="pointer-events-none fixed isolate z-50 opacity-20 mix-blend-soft-light"
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
              lightingColor="white"
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
