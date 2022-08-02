import React, { useState, useEffect } from "react";
import { listOfSizes } from "./utils/filters";
import { useParams, useSearchParams } from "react-router-dom";

function ShoeSizes() {
  const [category, setCategory] = useState({});
  const [isPressed, setIsPressed] = useState(true);
  const [search, setSearch] = useSearchParams();
  const [urlFilters] = useSearchParams();
  const params = useParams();

  const handleTitleBtn = () => {
    setIsPressed(!isPressed);

    const element = document.querySelector(".list-sizes");
    const btnTitle = document.querySelector(".size-btn");
    const btnMessage = document.querySelector(".btn-message");

    setTimeout(() => {
      if (category === undefined) {
        btnMessage.classList.replace("invisible", "visible");
        btnTitle.classList.add("underline");
      }
    }, 100);

    setTimeout(() => {
      if (category === undefined) {
        btnMessage.classList.replace("visible", "invisible");
        btnTitle.classList.remove("underline");
      }
    }, 1000);

    if (isPressed) {
      element.classList.replace("hidden", "static");
      btnTitle.classList.add("underline");
    } else {
      element.classList.replace("static", "hidden");
      btnTitle.classList.remove("underline");
    }
  };

  const handleSelectedSize = (item) => {
    if (item === Number(urlFilters.get(`size_us_${params.category}`))) {
      search.delete(`size_us_${params.category}`);
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set(`size_us_${params.category}`, item);
      setSearch(search, {
        replace: true,
      });
    }
  };

  useEffect(() => {
    const filterShoeSize = () => {
      try {
        params.category === "men"
          ? setCategory(listOfSizes.men)
          : params.category === "women"
          ? setCategory(listOfSizes.women)
          : params.category === "youth"
          ? setCategory(listOfSizes.youth)
          : setCategory(undefined);
      } catch (error) {
        console.log(error.message);
      }
    };

    filterShoeSize();
  }, [params]);

  return (
    <>
      <button
        onClick={handleTitleBtn}
        className="tracking-wider size-btn  hover:text-[#DCBA62] sm:hover:text-white "
      >
        Sizes
        <section className="btn-message invisible transform transition-all duration-200 tracking-[.2em]">
          <span className="w-[200px] h-fit absolute -top-[7em] -left-[9em] md:-left-[2em] lg:-left-[7em] rounded-md bg-[#DCBA62] text-[9px] text-black text-light text-center p-1 z-50">
            Select <br /> Men || Women || Youth
          </span>
          <svg
            className="absolute -top-[3em]  right-2 transform rotate-45 z-0"
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" fill="#DCBA62" />
          </svg>
        </section>
      </button>

      <section className="list-sizes w-[100%] h-full hidden ">
        {category?.length ? (
          <section className="grid grid-cols-5 gap-1 ">
            {category.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleSelectedSize(item);
                }}
                className="text-center border border-black hover:text-[#DCBA62] sm:hover:text-white"
              >
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
