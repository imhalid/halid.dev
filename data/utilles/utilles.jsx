import React from "react";
import Layouts from "../../components/Layouts";
import utillesData from "./utilles";

const Utilles = () => {
  return (
    <Layouts>
      <div className="">
        {utillesData.map((item) => (
          <div className="flex" key={item.title}>
            <div className="w-24 h-24 ">
              <img className="object-contain" src={item.image} alt="" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layouts>
  );
};

export default Utilles;
