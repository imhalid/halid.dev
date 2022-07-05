import Layouts from "../../components/Layouts";
import { getAllNodes } from "next-mdx/server";
import Head from "next/head";
import Link from "next/link";
//https://github.com/shadcn/next-mdx
const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <Layouts>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="space-y-6">
        {posts.map((post) => {
          return (
            <article key={post.url}>
              <h1>
                <Link href={post.url}>
                  <a className="text-xl font-bold">{post.frontMatter.title}</a>
                </Link>
              </h1>
              <p>{post.frontMatter.excerpt}</p>
              <p className="text-gray-400">{post.frontMatter.date}</p>
            </article>
          );
        })}
      </div>
    </Layouts>
  );
};

export default Blog;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes("post"),
    },
  };
}
