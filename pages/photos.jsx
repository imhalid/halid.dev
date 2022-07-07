import Layouts from "../components/Layouts";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [ref, inView] = useInView({ rootMargin: "110%" });
  const getPhotos = async () => {
    const key = process.env.API_URL;

    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/halidislam/photos?client_id=${key}`
      );
      setPhotos(data);
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
        "hover:brightness-110 hover:scale-[0.97] saturate-90 hover:saturate-100 transition ",
    };
  });

  return (
    <Layouts>
      <Head>
        <title>Photos</title>
      </Head>
      <motion.div>
        <div className="">
          {photo.map((data) => {
            return (
              <div className="item">
                <Image
                  ref={ref}
                  src={data.src}
                  alt="photo"
                  className={data.className}
                  width={data.width}
                  height={data.height}
                  // placeholder="blur"
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
