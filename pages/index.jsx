import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layouts from "../components/Layouts";

const Home = () => {
  return (
    <Layouts>
      <div>
        <Head>
          <title>Home</title>
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
              <a className="link">Instagram</a>
            </Link>
            .
          </p>
          <p>
            Find me on{" "}
            <Link href="https://github.com/imhalid">
              <a className="link cursor-ne-resize">GitHub</a>
            </Link>
            ,{" "}
            <Link href="https://twitter.com/halidislm">
              <a className="link twit">Twitter</a>
            </Link>
            .
            <p>I'm focused on Next.js right now. I love writing CSS and pure Javascript, dealing with designs. Looking for a job where I can improve myself.  If you want to teach me or [Hire Me]{" "}
            <Link href="mailto:hi@halid.dev">
              <a className="relative bg-gradient-to-r transition-all from-amber-500 to-rose-500 bg-clip-text text-transparent">
                hi@halid.dev
              </a>
            </Link>
          </p>
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
