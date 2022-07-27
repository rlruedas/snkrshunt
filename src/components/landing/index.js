import React from "react";

function landingpage() {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("brands").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-fit w-screen font-Montserrat transform-cpu transition-all duration-100 ">
        <div className=" bg-LandingPageBG bg-cover opacity-60 absolute top-0 h-full w-screen z-0"></div>
        <div className="flex flex-col justify-end items-center w-screen min-h-fit gap-10 pt-[8em] ">
          <section className="flex flex-col gap-10 items-center w-[90%] h-[90%] z-30 lg:flex-col justify-center lg:gap-10 ">
            <section className="flex flex-col justify-center items-center  text-center gap-[2em] backdrop-blur-[1px]">
              <span className=" font-bold font-Vonique tracking-[5px] text-[30px]  lg:text-[50px] 2xl:text-[60px] md:leading-[2em]  2xl:leading-[73px]  rounded-lg">
                PEOPLE MAKE{" "}
                <span className="tracking-[10px] font-thin font-BoiledSnakes text-[#14317b] text-[50px] md:text-[100px]">
                  SHOE&nbsp;
                </span>
                CONTACT
                <br /> BEFORE{" "}
                <span className=" text-[#14317b] font-thin font-BoiledSnakes text-[50px] md:text-[100px]">
                  EYE&nbsp;
                </span>
                CONTACT
              </span>
              <span className="font-bold font-Vonique  lg:text-[24px] tracking-widest 2xl:text-[18px]  rounded-lg">
                JUST BROWSE YOUR FAVORITE{" "}
                <span className="text-[40px] font-thin font-BoiledSnakes text-[#14317b]">
                  SNEAKERS
                </span>
              </span>
            </section>
            <img
              src={require("../../assets/png/LandingPageBrands.webp")}
              alt="brandImages"
              className="rounded-[10px] w-[450px] h-[300] 2xl:w-[614px] 2xl:h-[373px]"
            />
          </section>
          <span className="hidden md:block transform -rotate-90 absolute right-0 translate-x-[16em] -translate-y-[28em]  font-normal text-[12px] z-30">
            "This website's purspose is only for you to browse newly released
            sneakers"
          </span>

          <section className="flex flex-col justify-center items-center z-30 gap-7 ">
            <span className="tracking-widest font-bold font-Vonique text-[10px] lg:text-[18px] 2xl:text-[20px] backdrop-blur-[2px] ">
              DISCOVER{" "}
              <span className="text-[14px] sm:text-[30px] font-thin font-BoiledSnakes text-[#14317b] ">
                NEW RELEASES
              </span>{" "}
              FROM BRANDS OF YOUR CHOICE{" "}
            </span>
            <a href="true" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 1792 1792"
                version="1.1"
                viewBox="0 0 1792 1792"
                xmlSpace="preserve"
                className="w-[30px] h-[30px] 2xl:w-[50px] 2xl:h-[50px] animate-bounce fill-[#DCBA62]"
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

export default landingpage;
