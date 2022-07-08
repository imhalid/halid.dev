import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Layouts from "../../components/Layouts";

export const getStaticProps = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({ posts }) {
  return (
    <Layouts>
      <div>
        <h1>Blog</h1>

        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="prose prose-rose">
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </Layouts>
  );
}
