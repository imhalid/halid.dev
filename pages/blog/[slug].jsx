import Layouts from "../../components/Layouts";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "../../components/MdxComponents";
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
  return (
    <Layouts>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="">
        <h1 className="titles beforeBlue">{post.title}</h1>
        <MDXContent components={{ ...components }} />
      </article>
    </Layouts>
  );
}
