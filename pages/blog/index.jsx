import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Layouts from "../../components/Layouts";
import classNames from "../../util/classNames";

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
          <div
            className={classNames(
              "p-3 my-5 rounded-xl relative",
              "bg-neutral-100/40 border",
              "dark:bg-neutral-50/5 dark:border-neutral-700"
            )}
            key={post.slug}
          >
            <h2
              className={classNames(
                "pb-2 first-letter:capitalize text-xl font-medium",
                "hover:",
                "text-neutral-800",
                "dark:text-neutral-200"
              )}
            >
              <Link href={`/blog/${post.slug}`}>
                <a className="">{post.title}</a>
              </Link>
            </h2>
            <p className="text-black/30 absolute bottom-1 right-3 dark:text-white/40 text-sm">
              {post.publishedAt}
            </p>
            <p className="pb-3 ">{post.description}</p>
            <p className="">
              {post.tags.map((tags) => (
                <span
                  className={classNames(
                    "mr-1 px-2 py-1 rounded text-xs font-bold",
                    "bg-sky-300/50 text-sky-900",
                    "dark:bg-sky-800/20 dark:text-sky-500"
                  )}
                  key={tags.tag}
                >
                  {tags.tag}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Layouts>
  );
}
