import { getMdxNode, getMdxPaths } from "next-mdx/server";
import { useHydrate } from "next-mdx/client";
import { mdxComponents } from "../../components/mdxComponents";

import Layouts from "../../components/Layouts";
const PostPage = ({ post }) => {
  console.log(post);
  const content = useHydrate(post, {
    components: mdxComponents,
  });
  return (
    <Layouts>
      <article>
        <h1>{post.frontMatter.title}</h1>
        <p>{post.frontMatter.except}</p>
        <hr />
      </article>
      <div className="prose">{content}</div>
    </Layouts>
  );
};

export default PostPage;

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("post"),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = await getMdxNode("post", context);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
