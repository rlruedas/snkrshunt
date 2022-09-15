import React, { useEffect } from "react";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useSearchParams } from 'react-router-dom'

//components
import ShoeSizes from "./shoesizes";
import ShoeColors from "./color";
import ShoeReleaseDate from "./releasedate";
import ClearFilter from "./clearfilter";

function Filters() {
  const size = useWindowDimension();
  const [urlFilter] = useSearchParams();

  useEffect(() => {
    const parentContainer = document.querySelector(".filter-wrapper");

    if (size.width <= 768) {
      parentContainer.classList.replace("flex", "hidden");
    } else {
      parentContainer.classList.replace("hidden", "flex");
    }
  }, [size]);

  return (
    <div className="filter-wrapper flex justify-end items-center sticky left-0 top-0 h-screen  w-[15vw] text-black z-20">
      <section className="flex flex-col font-medium font-Poppins justify-center items-end text-[12px] mt-[5em]">
        <span className="text-[15px]">More Filters</span>
        <ShoeSizes />
        <ShoeColors />
        <ShoeReleaseDate />
        <button>Price (Low-High)</button>
        <button>Price (High-Low)</button>
        {[...urlFilter].length !== 0 ? <ClearFilter /> : <></>}
      </section>
    </div>
  );
}

export default Filters;
