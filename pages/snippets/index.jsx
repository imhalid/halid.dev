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
