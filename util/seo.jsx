import { createOgImage } from "./createOgImage";

const title = `Halid`;
const description = `Halit is a front-end developer who specializes in building web applications.`;
const domain = `halit.dev`;
const twitter = `@halidislm`;
const meta = `Front-end Developer`;

export const seo = {
  title: title + " | " + meta,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
};
