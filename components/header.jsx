import classNames from "../util/classNames";
import Link from "next/link";

const navItems = [
  {
    name: "カリード",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
    class: "pl-20",
  },
  {
    name: "Photos",
    href: "/photos",
  },
  {
    name: "Snippets",
    href: "/snippets",
  },
];

const Nav = () => {
  return (
    <div
      className={classNames(
        "w-100",
        "bg-mediumBlack px-5 py-3 rounded-xl text-white"
      )}
    >
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.name} className={item.class}>
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
