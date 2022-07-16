import Layouts from "../../components/Layouts";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "../../components/MdxComponents";
import { NextSeo } from "next-seo";
import { createOgImage } from "../../util/createOgImage";

import Head from "next/head";
export const getStaticPaths = async () => {
  return await {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({ post }) {
  const MDXContent = useMDXComponent(post.body.code);

  const url = `https://halid.dev/blog/${post.slug}`;
  const title = `${post.title} | halid.dev`;
  const ogImage = createOgImage({
    title: post.title,
    meta: "halid.dev · " + post.publishedAt,
  });

  return (
    <>
      <NextSeo
        title={title}
        description={post.description}
        canonical={url}
        openGraph={{
          url,
          title,
          description: post.description,
          images: [
            {
              url: ogImage,
              width: 1600,
              height: 836,
              alt: post.title,
            },
          ],
        }}
      />
      <Layouts>
        <Head>
          <title className="first-letter:capitalize">{post.title}</title>
        </Head>
        <article>
          <div className="titles beforeBlue">
            <h1 className="">{post.title}</h1>
            <p className="text-base opacity-50">{post.publishedAt}</p>
          </div>
          <p className="pTag italic">{post.description}</p>
          <MDXContent components={{ ...components }} />
        </article>
      </Layouts>
    </>
  );
}
