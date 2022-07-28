import React, { useEffect } from "react";

import { useWindowDimension } from "../../hooks/useWindowDimension";
import ShoeSizes from "./shoesizes";

function Filters() {
  const size = useWindowDimension();

  useEffect(() => {
    const parentContainer = document.querySelector(".filter-wrapper");

    if (size.width <= 768) {
      parentContainer.classList.replace("flex", "hidden");
    } else {
      parentContainer.classList.replace("hidden", "flex");
    }
  }, [size]);

  return (
    <div className="filter-wrapper flex justify-end items-center sticky left-0 top-0 h-[100vh]  w-[13vw]  text-white">
      <section className="flex flex-col font-Montserrat items-end text-[12px]">
        <span className="text-[15px]">More Filters</span>
        <ShoeSizes />
        <span>Color</span>
        <span>Release Date</span>
      </section>
    </div>
  );
}

export default Filters;
