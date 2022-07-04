import Nav from "./header";
import Footer from "./footer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0.9 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 0, y: 0, scale: 0.9 },
  whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
  viewport: { once: true },
};
const Layouts = ({ children }) => {
  return (
    <div className="main">
      <div className="container">
        <div className="nav">
          <Nav />
        </div>
        <div className="children">
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

      <style jsx>{`
        .main {
          padding: 70px 20% 0 20%;
          height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #fff;
          height: 100%;
          max-width: 720px;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        .nav {
          padding: 30px 30px 0 30px;
          z-index: 1;
        }
        .children {
          position: relative;
          padding: 40px 50px;

          flex: 1;
          overflow: auto;
          overflow-y: overlay;
        }

        ::-webkit-scrollbar {
          width: 2px;
          height: 1px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 1);

          border-radius: 10px;
        }

        ::-webkit-scrollbar-track {
          // background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Layouts;
