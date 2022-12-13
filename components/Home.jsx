import Link from "../util/noScrollLink";
import classNames from "util/classNames";
import LogoSVG from "./LogoSVG";
import BlueSVG from "./BlueSVG";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center ">
        <LogoSVG />
        <div className="flex pl-3 flex-col">
          <h1 className="text-3xl  font-bold">
            Halid <BlueSVG />
          </h1>
          <h4 className="opacity-50">Frontend Developer</h4>
        </div>
      </div>
      <article className="mt-10">
        <p>
          Developer and designer making products that feel 'right' and faster.
          Focused on creating fluid and accessible interfaces. Interested in 3D
          modeling.
        </p>

        <p>
          Outside of programming, I enjoy doing photography and traveling. Some
          of my photos can be found on{" "}
          <Link href="https://www.instagram.com/isuraka/">
            <a className="cursor-ne-resize  font-bold ">Instagram.</a>
          </Link>
        </p>
        <p>
          Find me on{" "}
          <Link href="https://github.com/imhalid">
            <a className=" cursor-ne-resize  font-bold  ">GitHub, </a>
          </Link>{" "}
          <Link href="https://twitter.com/halidislm">
            <a className=" cursor-ne-resize  font-bold">Twitter </a>
          </Link>
          and{" "}
          <Link href="https://www.linkedin.com/in/halitislamicli/">
            <a className="cursor-ne-resize  font-bold">LinkedIn.</a>
          </Link>
        </p>
        <p>
          I'm focused on Next.js right now. I love writing CSS and pure
          Javascript, dealing with designs. Looking for a job where I can
          improve myself. If you want to teach me or
        </p>
        <Link href="mailto:imhalid@icloud.com">
          <a
            className={classNames(
              "px-3 py-2 bg-blue-500 inline-block text-white inset-x-6 font-bold my-3",
              "rounded-lg hover:shadow-md hover:shadow-blue-400/50 ease-in-out hover:translate-x-1 transition-all hover:-rotate-1",
              "dark:bg-blue-600 dark:hover:bg-blue-600/90 dark:hover:shadow-blue-400/10"
            )}
          >
            <span>[HIRE ME]</span>
          </a>
        </Link>
      </article>
      <style jsx>{`
        p {
          margin-top: 20px;
          line-height: 1.8;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
