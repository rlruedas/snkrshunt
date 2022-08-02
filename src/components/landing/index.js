import React from "react";
import Fade from "react-reveal";

function Landingpage() {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("brands").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-fit w-screen font-Montserrat  transform-cpu transition-all duration-100 overflow-hidden">
        <div className=" bg-LandingPageBG bg-cover opacity-60 fixed top-0 h-full w-screen z-0"></div>
        <div className="flex flex-col justify-center items-center w-screen min-h-screen  gap-20 pt-[8em] ">
          <Fade left cascade>
            <section className="flex flex-col items-center w-[90%] h-[90%] z-30 lg:flex-row justify-center lg:gap-2 transform ">
              <section className="flex flex-col max-w-[600px] justify-center items-center  gap-[2em] backdrop-blur-sm  transform p-10 rounded-lg ">
                <span className=" font-extrabold font-Poppins text-left text-white lg:text-start text-[30px]   lg:text-[50px] 2xl:text-[60px] md:leading-[1em] 2xl:leading-[1em] ">
                  People make <span className="text-black">Shoe</span> contact before <span className="text-black">Eye</span> contact
                </span>
                <span className="font-light font-Poppins max-w-[500px]  text-justify leading-2 lg:text-start text-[10px] lg:text-[14px]  2xl:text-[18px] tracking-widest">
                  Just browse your favorite sneakers and discover new releases
                  from brands of your choice{" "}
                </span>
              </section>
              <section className="flex flex-col max-w-[700px]">
                <img
                  src={require("../../assets/png/LandingPageBrands.webp")}
                  alt="brandImages"
                  className="rounded-[10px] w-[300px] h-[200px] sm:w-[400px] sm:h-[250px]"
                />
              </section>
            </section>
          </Fade>
          <section className="flex flex-col justify-center items-center z-30 gap-2 ">
            <span className="font-bold font-Poppins max-w-[500px] text-justify lg:text-[18px] tracking-widest 2xl:text-[18px]  rounded-lg">
              Click the Arrow!
            </span>
            <a href="true" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 1792 1792"
                version="1.1"
                viewBox="0 0 1792 1792"
                xmlSpace="preserve"
                className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] animate-bounce fill-[#000000]"
              >
                <path d="M983.3 1532.1c-23.2 23.6-55.6 35.9-88.6 33.6-31.9 2.4-63-10-84.6-33.6L261.8 985.8c-45.4-45.4-45.4-119 0-164.4s119-45.4 164.4 0l354.4 354.4V342.1c-.4-63.8 51-115.8 114.8-116.1h.7c64 .4 115.8 52.1 116.1 116.1v833.6l353.7-354.4c45.4-45.4 119-45.4 164.4 0 45.4 45.4 45.4 119 0 164.4l-547 546.4z"></path>
              </svg>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
