import Nav from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";
import classNames from "../util/classNames";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.9 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 0.9 },
  whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
  viewport: { once: true },
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
          " h-20 z-1 rounded-3xl md:hidden xl:inline w-40 sm:w-[768px] top-0 absolute bg-gradient-to-r",
          "from-[#26c317]  to-[#1237bf] blur-[100px]",
          "dark:bg-gradient-to-r dark:from-[#7e43a5] dark:to-[#0517b9] dark:blur-[100px]"
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
          "bg-white w-full backdrop-blur shadow-lg",
          "dark:bg-neutral-800/80 dark:border-neutral-800/50",
          "sm:rounded-2xl sm:w-full  sm:mx-auto"
        )}
      >
        <div
          className={classNames("relative", "sm:p-12 sm:pb-5", "pt-20 px-3")}
        >
          <motion.div
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit"
            whileInView="whileInView"
            viewport="viewport" // Exit state (used later) to variants.exit
            transition={{ type: "linear", ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
