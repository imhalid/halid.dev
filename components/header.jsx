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
        "backdrop-blur bg-neutral-500/50 border-neutral-500/50 shadow-sm"
      )}
    >
      <ul className="flex justify-center items-center space-x-3 text-white font-medium">
        <li className="flex-1">
          <Link href="/">
            <a className="hover:text-white/80">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="hover:text-white/80">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a className="hover:text-white/80">Photos</a>
          </Link>
        </li>
        <li>
          <Link href="/snippets">
            <a className="pr-1 hover:text-white/80">Snippets</a>
          </Link>
        </li>
        <li>{renderThemeChanger()}</li>
      </ul>
    </div>
  );
};

export default Nav;
