import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layouts from "../components/Layouts";

const Home = () => {
  return (
    <Layouts>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <article>
          <h1 className="text-3xl">Hello 🙂</h1>
          <p>
            I love great designs and apps, passionately write code, and fight
            bugs. I like to deal with UI and animations.
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
              <a className="link">GitHub</a>
            </Link>
            ,{" "}
            <Link href="https://twitter.com/halidislm">
              <a className="link">Twitter</a>
            </Link>
            .
            <br /> Mail me at{" "}
            <Link href="mailto:hi@halid.dev">
              <a className="link">hi@halid.dev</a>
            </Link>
          </p>
          <p></p>
        </article>
      </div>
      <style jsx>{`
        p {
          margin-top: 30px;
          line-height: 1.8;
        }
      `}</style>
    </Layouts>
  );
};

export default Home;
