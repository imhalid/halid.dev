import Layouts from "../../components/Layouts";
import { allSnippets } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "../../util/MdxComponents";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { createOgImage } from "../../util/createOgImage";
export const getStaticPaths = async () => {
  return await {
    paths: allSnippets.map((snips) => ({ params: { slug: snips.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const snips = await allSnippets.find((snips) => snips.slug === slug);
  if (!snips) {
    return { notFound: true };
  }

  return { props: { snips } };
};

export default function SinglePostPage({ snips }) {
  const MDXContent = useMDXComponent(snips.body.code);

  const url = `https://halid.dev/snippets/${snips.slug}`;
  const title = `${snips.title} | halid.dev`;
  const ogImage = createOgImage({
    title: snips.title,
    meta: "halid.dev · " + snips.publishedAt,
  });

  return (
    <>
      <NextSeo
        title={title}
        description={snips.description}
        canonical={url}
        openGraph={{
          url,
          title,
          description: snips.description,
          images: [
            {
              url: ogImage,
              width: 1600,
              height: 836,
              alt: snips.title,
            },
          ],
        }}
      />
      <Layouts>
        <Head>
          <title className="first-letter:capitalize">{snips.title}</title>
        </Head>
        <article className="">
          <div className="titles">
            <h1 className="mt-8">{snips.title}</h1>
            <p className="text-base opacity-50">{snips.publishedAt}</p>
          </div>
          <MDXContent components={{ ...components }} />
        </article>
      </Layouts>
    </>
  );
}
