import Layouts from "../../components/Layouts";

import Head from "next/head";
import Link from "next/link";
//https://github.com/shadcn/next-mdx
const Blog = () => {
  return (
    <Layouts>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="space-y-6"></div>
    </Layouts>
  );
};

export default Blog;
