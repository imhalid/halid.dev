import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layouts from "../components/Layouts";
import classNames from "util/classNames";

const Home = () => {
  return (
    <Layouts>
      <div>
        <Head>
          <title>Halid</title>
        </Head>

        <article>
          <h1 className="text-3xl font-bold">
            Hello{" "}
            <motion.div
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              style={{
                display: "inline-block",
                cursor: "grab",
              }}
            >
              ツ
            </motion.div>
          </h1>
          <p>
            Developer and designer making products that feel 'right' and faster.
            Focused on creating fluid and accessible interfaces. Interested in
            3D modeling.
          </p>

          <p>
            Outside of programming, I enjoy doing photography and traveling.
            Some of my photos can be found on{" "}
            <Link href="https://www.instagram.com/isuraka/">
              <a className="link bg-gradient-to-r text-transparent font-bold bg-clip-text from-violet-500 to-rose-500 text-clip">
                [Instagram].
              </a>
            </Link>
          </p>
          <p>
            Find me on{" "}
            <Link href="https://github.com/imhalid">
              <a className="link font-bold dark:text-slate-300 text-zinc-800">
                [GitHub],{" "}
              </a>
            </Link>{" "}
            <Link href="https://twitter.com/halidislm">
              <a className="link text-blue-500 font-bold">[Twitter].</a>
            </Link>
          </p>
          <p>
            I'm focused on Next.js right now. I love writing CSS and pure
            Javascript, dealing with designs. Looking for a job where I can
            improve myself. If you want to teach me or
          </p>
          <Link href="mailto:hi@halid.dev">
            <a
              className={classNames(
                "px-3 py-2 bg-blue-500 inline-block text-white inset-x-6 font-bold my-3",
                "rounded-lg hover:shadow-md hover:shadow-blue-400/50 ease-in-out hover:translate-x-1 transition-all hover:-rotate-1",
                "dark:bg-green-600 dark:hover:bg-green-600/90 dark:hover:shadow-green-400/10"
              )}
            >
              <span>[Hire Me] </span>
            </a>
          </Link>
        </article>
      </div>
      <style jsx>{`
        p {
          margin-top: 20px;
          line-height: 1.8;
        }
      `}</style>
    </Layouts>
  );
};

export default Home;
