import classNames from "../util/classNames";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const Nav = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
          className="bg-gradient-to-b from-[#eaeaea] to-[#d6d6d6] text-neutral-900 p-1 rounded"
          onClick={() => setTheme("light")}
        >
          <BiMoon />
        </button>
      );
    } else {
      return (
        <button
          className="bg-gradient-to-b from-[#282828] to-[#1a1a1a] text-neutral-100 p-1 rounded"
          onClick={() => setTheme("dark")}
        >
          <BiSun />
        </button>
      );
    }
  };

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
          <Link href="/utilles">
            <a className="hover:text-neutral-600/80  dark:hover:text-neutral-300 transition-all">
              Utilles
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
        <li>{renderThemeChanger()}</li>
      </ul>
    </div>
  );
};

export default Nav;
