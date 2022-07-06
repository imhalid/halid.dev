import Layouts from "../../components/Layouts";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({ post }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <Layouts>
      <div>
        <h1>{post.title}</h1>
        <MDXContent />
      </div>
    </Layouts>
  );
}
