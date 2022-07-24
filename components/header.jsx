import classNames from "../util/classNames";
import Link from "../util/noScrollLink";
import ThemeChange from "./themeChange";

const Nav = () => {
  return (
    <div
      className={classNames(
        "py-1 px-3 flex items-center rounded-xl h-12 text-base ",
        "backdrop-blur-md bg-white/30  border-neutral-500/10 border",
        "dark:bg-neutral-800/30"
      )}
    >
      <Link href="/">
        <a>
          <svg
            className="w-6 h-6 ml-3 
             fill-neutral-800 dark:fill-slate-200  hover:scale-110 transition-all"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 495.398 495.398"
          >
            <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>
            <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>
          </svg>
        </a>
      </Link>
      <ul className={classNames("inline-flex list-none font-bold ml-auto")}>
        <li></li>
        <li>
          <Link href="/blog">
            <a className="headerHover">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="headerHover">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/snippets">
            <a className="headerHover mr-6">Snippets</a>
          </Link>
        </li>
        <li>
          <ThemeChange />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
