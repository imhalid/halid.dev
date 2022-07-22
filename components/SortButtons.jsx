import { MdOutlineDateRange } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const SortButtons = ({ sortByUpdate, sortByStars }) => {
  return (
    <div className="flex justify-center space-x-2">
      <div className="text-center cursor-pointer" onClick={sortByUpdate}>
        <p className=" bg-blue-100 w-10 dark:bg-zinc-900/70 border  dark:border-neutral-700/50 border-neutral-400/20 py-2 rounded-md">
          <MdOutlineDateRange className="inline" />
        </p>
      </div>
      <div className="text-center cursor-pointer" onClick={sortByStars}>
        <p className=" bg-blue-100 w-10 dark:bg-zinc-900/70 border  dark:border-neutral-700/50 border-neutral-400/20 py-2 rounded-md">
          <AiFillStar className="inline" />
        </p>
      </div>
    </div>
  );
};

export default SortButtons;
