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
    <div className="nav ">
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
          color: #fff;
          font-size: 1.1rem;
          border-radius: 10px;
          padding: 0.15rem 0.5rem;
          background: rgba(0, 0, 0, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          height: 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          // border: 2px solid #455d83;
        }

        .nav ul {
          display: flex;
          align-items: center;
          font-weight: bold;
        }

        .nav ul li:first-child {
          flex: 1;
          font-size: 1.5rem;
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

        @media (max-width: 768px) {
          .nav {
            border-radius: 5px;
            padding: 0.15rem 0.5rem;
            height: 42px;
          }
          .nav ul li:first-child {
            flex: 1;
            font-size: 1.2rem;
            letter-spacing: -2px;
          }

          .nav ul li:last-child {
            padding-right: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Nav;
