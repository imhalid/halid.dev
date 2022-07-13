import Nav from "./header";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "../util/classNames";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 1 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 1 },
};
const Layouts = ({ children }) => {
  return (
    <div
      className={classNames(
        "relative flex justify-center z-10 mx-auto w-full px-0 pt-0",
        "sm:max-w-screen-md sm:px-4 sm:pb-8 sm:pt-12 sm:mx-auto"
      )}
    >
      <div
        className={classNames(
          " h-20 z-1 rounded-3xl md:hidden xl:inline opacity-50 w-40 sm:w-[768px] top-0 absolute bg-gradient-to-r",
          "from-green-500  to-cyan-500 blur-[50px]",
          "dark:bg-gradient-to-r dark:from-violet-500 dark:to-blue-600"
        )}
      ></div>
      <div className="fixed top-3 sm:top-6 z-30 w-full">
        <div
          className={classNames(
            "w-full mx-auto px-[10px]",
            "sm:max-w-screen-md sm:px-[35px]"
          )}
        >
          <Nav />
        </div>
      </div>

      <div
        className={classNames(
          "bg-white text-neutral-800 w-full backdrop-blur shadow-lg",
          "dark:bg-zinc-800/50 dark:text-neutral-200 dark:border-neutral-800/50",
          "sm:rounded-2xl sm:w-full  sm:mx-auto"
        )}
      >
        <div
          className={classNames("relative", "sm:p-12 sm:pb-5", "pt-20 px-3")}
        >
          <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "linear" }}
            style={{
              height: "auto",
            }}
          >
            {children}
          </motion.main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
