import classNames from "../util/classNames";
import Link from "next/link";

const navLink = classNames("text-white hover:text-amber");

const navItems = [
  {
    name: "カリード",
    href: "/",
    class: navLink,
  },
  {
    name: "Blog",
    href: "/blog",
    class: navLink,
    // color: "#0ad",
  },
  {
    name: "Photos",
    href: "/photos",
    class: navLink,
  },
  {
    name: "Snippets",
    href: "/snippets",
    class: navLink,
  },
];

const Nav = () => {
  return (
    <div
      className={classNames(
        " flex flex-col justify-center py-1 px-3  rounded-xl h-12 text-base ",
        "text-white shadow-md backdrop-blur bg-slate-500/50"
      )}
    >
      <ul className="flex justify-center space-x-4">
        {navItems.map((item) => (
          <li className="first:flex-1 last:pr-2" key={item.name}>
            <Link href={item.href}>
              <a
                className={item.class}
                // style={{ "background-color": item.color }}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
