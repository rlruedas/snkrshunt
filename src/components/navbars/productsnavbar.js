import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ShoeSizes from "../filters/shoesizes";
import ShoeColors from "../filters/color";
import ShoeReleaseDate from "../filters/releasedate";
import ClearFilter from "../filters/clearfilter";
import Search from "../filters/search";

const DesktopNavBar = ({ params }) => {
  const { id } = params;
  return (
    <>
      <div className="flex sticky top-0 justify-center items-center h-[5em] w-screen border-b-2 border-black tracking-widest font-normal font-Poppins bg-[#DCBA62] z-50">
        <section className="flex flex-row justify-between items-center w-[65vw]">
          <a href="/" className="">
            <img
              src={require("../../assets/webp/logo.webp")}
              alt="logo"
              className="w-[80px] h-[80px] "
            />
          </a>
          <div className="relative flex flex-row items-center md:gap-2 lg:gap-5 transform duration-200">
            <a href={`/products/${id}/men`} className="hover:opacity-60 transform duration-200">MEN</a>
            <span className="text-[30px]">&nbsp;</span>
            <a href={`/products/${id}/women`} className="hover:opacity-60 transform duration-200">WOMEN</a>
            <span className="text-[30px]">&nbsp;</span>
            <a href={`/products/${id}/youth`} className="hover:opacity-60 transform duration-200">YOUTH</a>
          </div>
          <Search />
        </section>
      </div>
    </>
  );
};

const MobileNavBar = ({ params }) => {
  const [isMenuPressed, setIsMenuPressed] = useState(true);
  const [isFiltersPressed, setIsFiltersPressed] = useState(true);
  const [urlFilter] = useSearchParams();
  const { id } = params;

  const handleMenuClick = () => {
    setIsMenuPressed(!isMenuPressed);

    const sideBar = document.querySelector(".product-side-bar");
    const menuButton = document.querySelector(".bi-list");
    const closeButton = document.querySelector(".bi-x-lg");

    if (isMenuPressed) {
      sideBar.classList.replace("translate-x-[100%]", "translate-x-[0%]");
      menuButton.classList.replace("opacity-100", "opacity-0");
      menuButton.classList.replace("static", "hidden");
      closeButton.classList.replace("opacity-0", "opacity-100");
      closeButton.classList.replace("hidden", "static");
    } else {
      sideBar.classList.replace("translate-x-[0%]", "translate-x-[100%]");
      menuButton.classList.replace("opacity-0", "opacity-100");
      menuButton.classList.replace("hidden", "static");
      closeButton.classList.replace("opacity-0", "opacity-100");
      closeButton.classList.replace("static", "hidden");
    }
  };

  const handleFilterButton = () => {
    setIsFiltersPressed(!isFiltersPressed);

    const menuFilters = document.querySelector(".menu-filter");
    const colorOptions = document.querySelector(".list-colors");
    const colorButton = document.querySelector(".colorbtn-title");

    if (isFiltersPressed) {
      menuFilters.classList.replace("-translate-y-[3em]", "-translate-y-0");
      menuFilters.classList.replace("opacity-0", "opacity-100");
    } else {
      menuFilters.classList.replace("-translate-y-0", "-translate-y-[3em]");
      menuFilters.classList.replace("opacity-100", "opacity-0");
      colorOptions.classList.replace("flex", "hidden");
      colorButton.classList.remove("underline");
    }
  };

  return (
    <>
      <div className="flex flex-row fixed top-0 justify-between px-[3em] items-center h-[5em] w-screen border-b-2 border-black font-normal font-Poppins z-20 bg-[#DCBA62]">
        <a href="/">
          <img
            src={require("../../assets/webp/logo.webp")}
            alt="logo"
            className="w-[80px] h-[80px] left-[15em]"
          />
        </a>
        <button onClick={handleMenuClick} className="z-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="static bi bi-list w-[40px] h-[40px] fill-black opacity-100 transition-all duration-500"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden bi bi-x-lg w-[40px] h-[40px] fill-white opacity-0 transition-all duration-500"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        <div className="absolute top-0 right-0 flex flex-col  w-[70%] h-screen bg-black text-white text-[24px] tracking-wider font-black justify-start items-center z-20 product-side-bar transform transition-all duration-200 translate-x-[100%] pt-[5em] gap-[2em] overflow-y-auto ">
          <a href={`/products/${id}/men`}>MEN</a>
          <a href={`/products/${id}/women`}>WOMEN</a>
          <a href={`/products/${id}/youth`}>YOUTH</a>
          <button
            onClick={() => {
              handleFilterButton();
            }}
            className="z-30 tracking-widest"
          >
            MORE FILTERS
          </button>
          <section className="menu-filter w-full  static flex flex-col text-[12px] justify-center items-center opacity-0 transform duration-500 -translate-y-[3em] gap-[1em] ">
            <ShoeSizes />
            <ShoeColors />
            <ShoeReleaseDate />
            {[...urlFilter].length !== 0 ? <ClearFilter /> : <></>}
          </section>
          <a href="/" className="text-[14px] ">
            HOME
          </a>
        </div>
      </div>
    </>
  );
};

function NavBar() {
  const size = useWindowDimension();
  const params = useParams();

  return (
    <>
      {size.width < 768 ? (
        <MobileNavBar params={params} />
      ) : (
        <DesktopNavBar params={params} />
      )}
    </>
  );
}

function useWindowDimension() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default NavBar;
