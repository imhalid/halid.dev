import Link from "../util/noScrollLink";
import classNames from "util/classNames";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center ">
        <div className="bg-gradient-to-tr -rotate-3 transition-all hover:rotate-0 to-neutral-300 from-neutral-300 p-1 rounded-xl">
          <img
            src="https://res.cloudinary.com/halid/image/upload/c_scale,q_100,w_411/v1658781219/IMG_9215_nsrvp5.jpg"
            className="rounded-xl w-16 h-16"
          />
        </div>
        <div className="flex pl-3 flex-col">
          <h1 className="text-3xl  font-bold">Halid</h1>
          <h4 className="opacity-50">Front-end Developer</h4>
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
            <a className=" cursor-ne-resize  font-bold">Twitter.</a>
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
