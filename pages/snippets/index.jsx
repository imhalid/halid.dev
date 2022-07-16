import { allSnippets } from "contentlayer/generated";
import Link from "next/link";
import Layouts from "../../components/Layouts";
import classNames from "../../util/classNames";
import Head from "next/head";

export const getStaticProps = () => {
  return { props: { posts: allSnippets } };
};

export default function SnippetsListPage({ posts }) {
  return (
    <Layouts>
      <Head>
        <title>Snippets</title>
      </Head>
      <div>
        {posts
          .filter((isPublisheds) => isPublisheds.status === "published")
          .map((post) => (
            <Link href={`/snippets/${post.slug}`} key={post.slug}>
              <div
                className={classNames(
                  "p-3 my-5 hover:scale-[0.98] cursor-pointer relative rounded-xl",
                  "bg-neutral-100/40 border ",
                  "dark:bg-neutral-50/5 dark:border-neutral-700"
                )}
              >
                <h2
                  className={classNames(
                    "pb-2 first-letter:capitalize text-xl font-medium",

                    "text-neutral-800",
                    "dark:text-neutral-200"
                  )}
                >
                  <a>{post.title}</a>
                </h2>
                <p className="text-black/30 absolute bottom-1 right-3 dark:text-white/40 text-sm">
                  {post.publishedAt}
                </p>
                <p className="pb-3 text-neutral-500 dark:text-neutral-400">
                  {post.description}
                </p>
                <p className="">
                  {post.tags === undefined
                    ? ""
                    : post.tags.map((tags) => (
                        <span
                          className={classNames(
                            "mr-1 px-2 py-1 rounded text-xs font-bold",
                            "bg-blue-300/50 text-blue-900",
                            "dark:bg-blue-800/20 dark:text-blue-500"
                          )}
                          key={tags.tag}
                        >
                          {tags.tag}
                        </span>
                      ))}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </Layouts>
  );
}
