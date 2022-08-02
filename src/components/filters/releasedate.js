import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import { releaseYear } from "./utils/filters";

function ReleaseDate() {
  const [urlFilter] =  useSearchParams();
  const [dateFilter, setDateFilter] = useSearchParams();
  const [isPressed, setIsPressed] = useState(true);

  const handleReleaseDateBtn = () => {
    setIsPressed(!isPressed);

    if (isPressed) {
      document
        .querySelector(".list-container")
        .classList.replace("hidden", "grid");
    } else {
      document
        .querySelector(".list-container")
        .classList.replace("grid", "hidden");
    }
  };

  const handleSelectedItem = (item) => {

    if (item === urlFilter.get("release_year")) {
      dateFilter.delete("release_year");
      setDateFilter(dateFilter, {
        replace: true,
      });
    } else {
      dateFilter.set("release_year", item);
      setDateFilter(dateFilter, {
        replace: true,
      });
    }
  };

  return (
    <>
      <button onClick={handleReleaseDateBtn} className="btn-releasedate hover:text-[#DCBA62] sm:hover:text-white">
        Release Date
      </button>
      <section className="list-container hidden grid-cols-3 gap-1 ">
        {releaseYear.map((item, index) => (
          <button
            onClick={() => handleSelectedItem(item)}
            key={index}
            className="border border-black p-1 hover:bg-black hover:text-[#DCBA62] "
          >
            {item}
          </button>
        ))}
      </section>
    </>
  );
}

export default ReleaseDate;
