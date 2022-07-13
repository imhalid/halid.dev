import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const ThemeChange = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function GoTheme() {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button
          className="bg-neutral-200 text-neutral-900 p-1 rounded
          ring-opacity-0 hover:ring-opacity-100 hover:ring-[3px] ring-blue-500 
          hover:drop-shadow-[0_0px_20px_rgb(36,100,255)] transition-all "
          onClick={() => setTheme("light")}
        >
          <BiMoon />
        </button>
      );
    } else {
      return (
        <button
          className="bg-neutral-700 text-neutral-100 p-1 rounded 
          ring-opacity-0 hover:ring-opacity-100 hover:ring-[3px] ring-blue-500 
          hover:drop-shadow-[0_0px_20px_rgb(36,100,255)] transition-all "
          onClick={() => setTheme("dark")}
        >
          <BiSun />
        </button>
      );
    }
  }
  return <GoTheme />;
};

export default ThemeChange;
