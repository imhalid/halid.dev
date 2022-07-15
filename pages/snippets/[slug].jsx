import Layouts from "../../components/Layouts";
import { allSnippets } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "../../components/MdxComponents";
import Head from "next/head";
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
  return (
    <Layouts>
      <Head>
        <title>{snips.title}</title>
      </Head>
      <article className="">
        <div className="titles beforeBlue">
          <h1 className="">{snips.title}</h1>
          <p className="text-base opacity-50">{snips.publishedAt}</p>
        </div>
        <MDXContent components={{ ...components }} />
      </article>
    </Layouts>
  );
}
