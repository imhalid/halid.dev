import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Layouts from "../../components/Layouts";

export const getStaticProps = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({ posts }) {
  console.log(posts);
  return (
    <Layouts>
      <div>
        <h1>Blog</h1>

        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="">
              <Link href={`/blog/${post.slug}`}>
                <a>
                  {post.title} {"<"} [titles]
                </a>
              </Link>
            </h2>
            <p>
              {post.description} {"<"} [desc]
            </p>
            <h1>
              {post.tags.tags} {"<"} [tags]
            </h1>
          </div>
        ))}
      </div>
    </Layouts>
  );
}
