import Head from "next/head";
import Image from "next/image";
import Layouts from "../components/Layouts";

const Home = () => {
  return (
    <Layouts>
      <div className="">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        hello world
      </div>
    </Layouts>
  );
};

export default Home;
