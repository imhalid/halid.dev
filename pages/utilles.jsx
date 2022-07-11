import React from "react";
import Layouts from "../components/Layouts";
import utillesData from "../data/utilles/utilles";

const Utilles = () => {
  return (
    <Layouts>
      {utillesData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.image} alt="" />
        </div>
      ))}
    </Layouts>
  );
};

export default Utilles;
