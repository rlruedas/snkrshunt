import React from "react";

import ItemsCarousel from "./itemscarousel";
import Zoom from "react-reveal";

function FeaturedProducts() {
  return (
    <>
      <div className="flex flex-col w-screen min-h-screen overflow-x-clip justify-center items-center gap-6 bg-white">
        <section className="flex flex-col flex-[1_1_0%] w-screen justify-center items-center ">
          <section className=" firstParagraph flex flex-row  bg-white self-start">
            <span className=" text-[120px] whitespace-nowrap font-Hotlady  text-black  ">{`//Find your happy in our new collection of boots and booties// `}</span>
            <span className="  text-[120px] whitespace-nowrap font-Hotlady text-black">{`Find your happy in our new collection of boots and booties`}</span>
            <span className=" text-[120px] whitespace-nowrap font-Hotlady text-black">{`//Find your happy in our new collection of boots and booties//`}</span>
          </section>
          <section className="secondParagraph flex flex-row bg-black self-start">
            <span className="text-[120px] whitespace-nowrap font-Hotlady text-white">{`//Drop your summertime plans this weekend and be here in these new SNEAKS. . .//`}</span>
            <span className="text-[120px] whitespace-nowrap font-Hotlady text-white">{`Drop your summertime plans this weekend and be here in these new SNEAKS. . .`}</span>
            <span className="text-[120px] whitespace-nowrap font-Hotlady text-white">{`//Drop your summertime plans this weekend and be here in these new SNEAKS. . .//`}</span>
          </section>
        </section>
        <section className="flex flex-1 flex-col w-screen justify-center items-end">
          <Zoom>
            <section className="flex flex-row justify-center items-center mr-[2em] sm:mr-[5em]">
              <span className="font-black font-Poppins text-[30px] sm:text-[50px] md:text-[60px] lg:text-[80px]  tracking-[.2em] sm:self-end text-[#DCBA62]">
                WHAT'S HOT
              </span>
              <span className="text-[30px] md:text-[40px] lg:text-[70px]">
                🔥
              </span>
            </section>
          </Zoom>
          <ItemsCarousel />
        </section>
        <section className=" flex flex-col flex-[1_1_0%] w-screen justify-center items-center ">
          <section className="thirdParagraph flex flex-row  bg-white self-start">
            <span className="text-[120px] whitespace-nowrap font-Hotlady">{`//New shoes are like new pillows–they just make a room feel brand new!//`}</span>
            <span className="text-[120px] whitespace-nowrap font-Hotlady">{`New shoes are like new pillows–they just make a room feel brand new!`}</span>
            <span className="text-[120px] whitespace-nowrap font-Hotlady">{`//New shoes are like new pillows–they just make a room feel brand new!//`}</span>
          </section>
          <section className="fourthParagraph flex flex-row bg-black self-start">
            <span className="text-[120px] whitespace-nowrap font-Hotlady text-white">
              {`//Just because you’ve got a new pair of kicks doesn’t mean you no longer have to go the extra mile.//`}
            </span>
            <span className="text-[120px] whitespace-nowrap font-Hotlady text-white">
              {`Just because you’ve got a new pair of kicks doesn’t mean you no longer have to go the extra mile.`}
            </span>
            <span className="text-[120px] whitespace-nowrap font-Hotlady text-white">
              {`//Just because you’ve got a new pair of kicks doesn’ t mean you no longer have to go the extra mile.//`}
            </span>
          </section>
        </section>
      </div>
    </>
  );
}

export default FeaturedProducts;
