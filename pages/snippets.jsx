import Layouts from "../components/Layouts";
import Head from "next/head";
import { motion } from "framer-motion";

const Snippets = () => {
  return (
    <Layouts>
      <Head>
        <title>Snippets</title>
      </Head>
      <motion.div>snippets</motion.div>
    </Layouts>
  );
};

export default Snippets;
