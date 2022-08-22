import Link from "../util/noScrollLink";
import classNames from "util/classNames";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center ">
        <svg
          width="58"
          height="64"
          viewBox="0 0 58 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md brightness-125 "
        >
          <path
            d="M33.75 2.31976L52.3288 13.0463C55.2682 14.7433 57.0788 17.8795 57.0788 21.2735V42.7265C57.0788 46.1205 55.2682 49.2567 52.3288 50.9537L33.75 61.6802C30.8107 63.3773 27.1893 63.3773 24.25 61.6802L5.67116 50.9537C2.73185 49.2567 0.921162 46.1205 0.921162 42.7265V21.2735C0.921162 17.8795 2.73185 14.7433 5.67116 13.0463L24.25 2.31976C27.1893 0.622752 30.8107 0.622753 33.75 2.31976Z"
            fill="url(#paint0_radial_367_2)"
            stroke="white"
            strokeWidth="2"
          />
          <defs>
            <radialGradient
              id="paint0_radial_367_2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(38.5 59.5) rotate(-114.114) scale(57.5196 84.2474)"
            >
              <stop stop-color="#002D85" />
              <stop offset="1" stop-color="#5AC9D8" />
            </radialGradient>
          </defs>
        </svg>

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
