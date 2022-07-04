import classNames from "../util/classNames";
import Link from "next/link";

const navItems = [
  {
    name: "カリード",
    href: "/",
    class: "navLink",
  },
  {
    name: "Blog",
    href: "/blog",
    class: "navLink",
    // color: "#0ad",
  },
  {
    name: "Photos",
    href: "/photos",
    class: "navLink",
  },
  {
    name: "Snippets",
    href: "/snippets",
    class: "navLink",
  },
];

const Nav = () => {
  return (
    <div className="nav">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
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
      <style jsx>{`
        .nav {
          color: ##313131;
          border-radius: 10px;
          padding: 0.15rem 0.5rem;
          background-color: #f7f7f7;
          height: 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0px 10px 32px rgb(255 255 255);
        }

        .nav ul {
          display: flex;
          align-items: center;
        }

        .nav ul li:first-child {
          flex: 1;
          font-weight: 700;
          font-size: 1.5rem;
          font-family: Inter, sans-serif;
          letter-spacing: -2px;
        }

        .nav ul li:last-child {
          padding-right: 10px;
        }

        .navLink {
          transition: all 0.2s ease-in-out;
          opacity: 0.9;
          font-weight: 500;
          // padding: 6px 5px;
          // border-radius: 5px;
        }

        .navLink:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Nav;
