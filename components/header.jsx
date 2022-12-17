import classNames from "../util/classNames";
import Link from "../util/noScrollLink";
import ThemeChange from "./themeChange";
import HomeSVG from "./HomeSVG";

const Nav = () => {

  const NavbarLinks = [
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Snippets",
      href: "/snippets",
    },

  ]


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
<HomeSVG />
        </a>
      </Link>
      <ul className={classNames("inline-flex list-none font-bold ml-auto")}>

        {NavbarLinks.map((link, index) => (
          <li key={index} className="ml-3">
            <Link href={link.href}>
              <a className="headerHover">
                {link.name}
              </a>
            </Link>
          </li>
        ))}
        <li className="ml-6"><ThemeChange/></li>
      </ul>
    </div>
  );
};

export default Nav;


