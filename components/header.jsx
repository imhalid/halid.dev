import classNames from "../util/classNames";
import Link from "../util/noScrollLink";
import ThemeChange from "./themeChange";

const Nav = () => {
  return (
    <div
      className={classNames(
        "flex flex-col justify-center py-1 px-3  rounded-xl h-12 text-base ",
        "backdrop-blur  bg-neutral-50/90 border-neutral-500/10 border shadow-sm",
        "dark:bg-neutral-800/10"
      )}
    >
      <ul
        className={classNames(
          "flex justify-center items-center  space-x-3 font-medium ",
          "dark:text-slate-200"
        )}
      >
        <li className="flex-1">
          <Link href="/">
            <a className="hover:text-neutral-600/80  dark:hover:text-neutral-300 transition-all">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="hover:text-neutral-600/80 dark:hover:text-neutral-300 transition-all">
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/snippets">
            <a className="pr-1 hover:text-neutral-600/80 dark:hover:text-neutral-300 transition-all">
              Snippets
            </a>
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
