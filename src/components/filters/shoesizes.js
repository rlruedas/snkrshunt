import React, { useState, useEffect } from "react";
import { listOfSize, listOfSizes } from "./utils/filters";
import { useParams } from "react-router-dom";

function ShoeSizes() {
  const [category, setCategory] = useState({});
  const [isPressed, setIsPressed] = useState(true);
  const shoeSize = listOfSizes;
  const params = useParams();

  const filterShoeSize = () => {
    //filter json array shoe sizes depending on the chosen category
    const set = shoeSize.filter((item) => {
      return params.category === undefined
        ? item.undefined
        : params.category === "men"
        ? item.men
        : params.category === "women"
        ? item.women
        : item.youth;
    });
    //set category based on the parameters passed
    setCategory(set[0][`${params.category}`]);
  };

  const handleButton = () => {
    setIsPressed(!isPressed);

    const element = document.querySelector(".list-sizes");

    if (isPressed) {
      element.classList.replace("hidden", "static");
      element.classList.add("underline");
    } else {
      element.classList.replace("static", "hidden");
      element.classList.remove("underline");
    }
  };

  useEffect(() => {
    filterShoeSize();
  }, []);

  return (
    <>
      <button onClick={handleButton} className="tracking-wider ">
        Sizes
      </button>
      <section className="list-sizes w-[100%] h-full hidden ">
        {category?.length ? (
          <section className="grid grid-cols-5 gap-1 ">
            {category.map((item, index) => (
              <button key={index} className="text-center border border-black">
                {item}
              </button>
            ))}
          </section>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default ShoeSizes;
