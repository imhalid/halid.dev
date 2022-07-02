import classNames from "../util/classNames";

const Nav = ({ children }) => {
  return (
    <div
      className={classNames(
        "w-100",
        "bg-lightGreen px-5 py-3 rounded-xl text-white",
        "border-collapse border-2 border-darkGreen border-dashed",
        "dark:"
      )}
    >
      <ul className="flex space-x-4">
        <li className="drop-shadow-lg">カリード</li>
        <li className="drop-shadow-lg">Blog</li>
        <li className="drop-shadow-lg">Photos</li>
        <li className="drop-shadow-lg">Snippets</li>
      </ul>
    </div>
  );
};

export default Nav;
