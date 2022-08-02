import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import { colors } from "./utils/filters";

function Color() {
  const [isPressed, setIsPressed] = useState(false);
  const [urlFilter] = useSearchParams();
  const [filter, setFilter] = useSearchParams();

  let setOfColors = colors.properties;

  const handleColorBtn = () => {
    setIsPressed(!isPressed);
    const colorElem = document.querySelector(".list-colors");
    const btnTitle = document.querySelector(".colorbtn-title");

    if (isPressed) {
      colorElem.classList.replace("flex", "hidden");
      btnTitle.classList.remove("underline");
    } else {
      colorElem.classList.replace("hidden", "flex");
      btnTitle.classList.add("underline");
    }
  };

  const handleColorOption = (name) => {
    if (name === urlFilter.get("color")) {
      filter.delete("color");
      setFilter(filter, {
        replace: true,
      });
    } else {
      filter.set("color", name);
      setFilter(filter, {
        replace: true,
      });
    }
  };

  return (
    <>
      <button
        onClick={handleColorBtn}
        className="colorbtn-title hover:text-[#DCBA62] sm:hover:text-white"
      >
        Colors
      </button>
      <section className="list-colors hidden flex-col w-fit justify-center items-end">
        {setOfColors.map((item, index) => (
          <button
            key={index}
            className="flex flex-row justify-between w-fit items-center gap-2 hover:text-[#DCBA62] sm:hover:text-white "
            onClick={() => handleColorOption(item.name)}
          >
            <div className={`${item.hex} w-[10px] h-[10px]`}>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="item-name active:bg-black">{item.name}</div>
          </button>
        ))}
      </section>
    </>
  );
}

export default Color;
