import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

import { getShoeData } from "../../database/api";

function Item() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    try {
      getShoeData(params.id).then((data) => setData(data.data));
    } catch (error) {
      console.log(error.message);
    }
    
  }, [params]);

  return (
    <>
      <div className="flex w-screen h-screen bg-black font-Montserrat justify-center items-center">
        <section className="w-screen h-screen items-center flex flex-col ">
          <h1 className="w-[80%] text-white font-extrabold text-[30px] ">
            {data.name}
          </h1>
          <section className="flex flex-row overflow-x-scroll w-screen h-screen no-scrollbar items-center gap-6 before:shrink-0 before:w-[5vw] ">
            {data?.productTemplateExternalPictures?.length > 0 ? (
              data.productTemplateExternalPictures.map((item, index) => (
                <section key={index} className="shrink-0 ">
                  <img src={item} alt="shoeImage" />
                </section>
              ))
            ) : (
              <section className="shrink-0 bg-white ">
                <img src={data.pictureURL} alt="shoeImage" className="w-[40vw] h-[80vh]" />
              </section>
            )}
          </section>
        </section>
      </div>
    </>
  );
}

export default Item;
