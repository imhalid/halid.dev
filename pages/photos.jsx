import Layouts from "../components/Layouts";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import { motion } from "framer-motion";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const key = process.env.NEXT_PUBLIC_UNSPLASH_key_ID;

    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/halidislam/photos?client_id=VtBRCNVPaddBueKrJ7x-oTXu3fDbQiM_Y8PQ05_arcs`
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
        <Gallery photos={photo} />
      </motion.div>
      <style jsx>{``}</style>
    </Layouts>
  );
};

export default Photos;
