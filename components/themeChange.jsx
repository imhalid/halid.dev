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
  }
  return <GoTheme />;
};

export default ThemeChange;
