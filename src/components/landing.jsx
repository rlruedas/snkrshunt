import React from "react";

const Landing = () => {
  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("brands").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-fit w-screen font-Montserrat  transform-cpu transition-all duration-100 overflow-hidden">
        <div className=" bg-LandingPageBG bg-cover opacity-60 fixed top-0 h-full w-screen z-0"></div>
        <div className="flex flex-col justify-center items-center w-screen min-h-screen  gap-20 pt-[8em] ">
          <section className="flex flex-col items-center w-[90%] h-[90%] z-30 lg:flex-row justify-center lg:gap-2 transform ">
            <section className="flex flex-col max-w-[90vw] justify-center items-center  gap-[2em] backdrop-blur-[1px] transform p-10 rounded-lg ">
              <span className=" font-extrabold font-Poppins text-center text-white lg:text-center text-[30px]   lg:text-[50px] 2xl:text-[50px] md:leading-[1em] 2xl:leading-[1em] ">
                People make <span className="text-black">SHOE</span> contact
                before <span className="text-black">EYE</span> contact
              </span>
              <span className="font-medium font-Poppins max-w-[500px] leading-none  text-center lg:text-center text-[10px] lg:text-[14px]  2xl:text-[18px] tracking-widest">
                Just browse your favorite sneakers and discover new releases
                from brands of your choice{" "}
              </span>
            </section>
            {/* <section className="flex flex-col max-w-[700px]">
              <img
                src={require("../../assets/png/LandingPageBrands.webp")}
                alt="brandImages"
                className="rounded-[10px] w-[300px] h-[200px] sm:w-[400px] sm:h-[250px]"
              />
            </section> */}
          </section>
          <section className="flex flex-col justify-center items-center z-30 gap-2 bg-black text-[#DCBA62] px-5 border border-white ">
            <span className="font-medium font-Poppins max-w-[500px] text-justify lg:text-[18px] tracking-widest 2xl:text-[18px]  rounded-lg">
              View the Brands!
            </span>
            <a href="true" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bi bi-caret-down-fill w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] animate-bounce fill-[#DCBA62]"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default Landing;