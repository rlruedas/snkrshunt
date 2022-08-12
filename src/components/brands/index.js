import React, { useState } from "react";

function Brands() {
  const [hover, setHover] = useState(true);
  const [rand, setRandom] = useState();
  const emojis = ["😁", "😍", "😵", "🤐", "🥵", "🥳", "🙈", "🙉", "🙊"];

  const handleHover = (e) => {
    if (e.type === "mouseenter") {
      setHover(false);
      setRandom(Math.floor(Math.random() * 9));
      return;
    }
    setHover(true);
  };


  
  return (
    <div
      className="relative w-screen min-h-fit bg-black text-white py-[5em]"
      id="brands"
    >
      <div className="bg-BrandPageBG bg-cover bg-bottom w-full h-full absolute bottom-0 z-0 opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center  z-10">
        <section className="relative flex flex-col w-[70%] h-fit gap-[2em] justify-center items-start">
          <h1 className="font-extrabold font-Poppins text-[20px] sm:text-[30px] lg:text-[50px] text-[#DCBA62]">
            CHOOSE YOUR BRAND
            <span className="sm:text-[60px] lg:text-[80px] transform translate-x-10">
              {hover ? `🤔` : ` ${emojis[rand]}`}
            </span>
          </h1>
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-[2em] ">
            <a
              href="/products/adidas"
              className="flex justify-center items-center bg-white w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/adidas.png")}
                alt="adidasImage"
                className="w-[50px] h-[50px]"
              />
            </a>

            <a
              href="/products/nike"
              className="flex justify-center items-center bg-white w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/nike.png")}
                alt="nikeImage"
                className="w-[50px] h-[50px]"
              />
            </a>

            <a
              href="/products/air jordan"
              className="flex justify-center items-center bg-white w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/jordan.png")}
                alt="nikeImage"
                className="w-[50px] h-[50px]"
              />
            </a>

            <a
              href="/products/champion"
              className="flex justify-center items-center bg-white  w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/champion.png")}
                alt="championImage"
                className="w-[50px] h-[50px]"
              />
            </a>
            <a
              href="/products/new balance"
              className="flex justify-center items-center bg-white w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/new-balance.png")}
                alt="newbalanceImage"
                className="w-[50px] h-[50px]"
              />
            </a>
            <a
              href="/products/asics"
              className="flex justify-center items-center bg-white  w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/asics.png")}
                alt="asics"
                className="w-[50px] h-[50px]"
              />
            </a>
            <a
              href="/products/puma"
              className="flex justify-center items-center bg-white  w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/puma.png")}
                alt="puma"
                className="w-[50px] h-[50px]"
              />
            </a>
            <a
              href="/products/vans"
              className="flex justify-center items-center bg-white  w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/vans.png")}
                alt="vans"
                className="w-[50px] h-[50px]"
              />
            </a>
            <a
              href="/products/onitsuka tiger"
              className="flex justify-center items-center bg-white  w-full h-[120px] sm:h-[120px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 "
              onMouseEnter={(e) => handleHover(e)}
              onMouseLeave={(e) => handleHover(e)}
            >
              <img
                src={require("../../assets/png/shoebrands/onitsuka-tiger.png")}
                alt="onitsuka-tiger"
                className="w-[50px] h-[50px]"
              />
            </a>
          </section>
          <span className="font-light font-Poppins z-10 self-center text-[#DCBA62]">
            More Brands to Come!{" "}
          </span>
        </section>
      </div>
    </div>
  );
}

export default Brands;
