import Layouts from "../components/Layouts";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const key = process.env.API_URL;

    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/halidislam/photos?client_id=${key}`
      );
      setPhotos(data);
      console.log(data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (!photos) {
    return <div>Loading...</div>;
  }

  const photo = photos.map((data) => {
    return {
      src: data.urls.regular,
      width: data.width,
      height: data.height,
      className:
        "hover:brightness-110 hover:scale-[0.97] bg-center saturate-50 hover:saturate-[1] transition ",
    };
  });

  return (
    <Layouts>
      <Head>
        <title>Photos</title>
      </Head>
      <motion.div>
        <p className="pb-4">I like to take nature photos the most.</p>
        <div className="">
          {photo.map((data) => {
            console.log(data.blur_hash);
            return (
              <div className="">
                <Image
                  src={data.src}
                  alt="photo"
                  className={data.className}
                  width={data.width}
                  height={data.height}
                  blurDataURL="L6A_5?%%4XV?R$R5siavD%IURQRV"
                  placeholder="blur"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <style jsx>{``}</style>
    </Layouts>
  );
};

export default Photos;
