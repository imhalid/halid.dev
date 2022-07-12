import { allSnippets } from "contentlayer/generated";
import Link from "next/link";
import Layouts from "../../components/Layouts";
import classNames from "../../util/classNames";

export const getStaticProps = () => {
  return { props: { posts: allSnippets } };
};

export default function SnippetsListPage({ posts }) {
  return (
    <Layouts>
      <div className="">
        {posts
          .filter((isPublisheds) => isPublisheds.status === "published")
          .map((post) => (
            <Link href={`/snippets/${post.slug}`} key={post.slug}>
              <div
                className={classNames(
                  "p-3 my-5 cursor-pointer snipHover rounded-xl flex justify-between items-center",
                  "bg-neutral-100/40 border ",
                  "dark:bg-neutral-50/5 dark:border-neutral-700"
                )}
              >
                <p
                  className={classNames(
                    "first-letter:capitalize text-xl font-medium"
                  )}
                >
                  {post.title}
                </p>
                <p className="text-black/60 font-medium dark:text-white/40 text-sm">
                  {post.publishedAt}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </Layouts>
  );
}

//List Tags
{
  /* <p className="">
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
              </p> */
}
