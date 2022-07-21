import React from 'react'

function brands() {


  return (
    <div className='relative w-screen min-h-screen bg-black text-white font-Montserrat' id="brands" >
      <div className="bg-BrandPageBG bg-cover bg-bottom w-screen min-h-screen absolute bottom-0 z-0 opacity-50" ></div>
      <div className="relative flex flex-col justify-center items-center  z-10">
        <section className='relative flex flex-col w-[70%] h-screen gap-[2em] justify-center items-start' >
          <h1 className="font-extrabold text-[18px] md:text-[50px] text-[#DCBA62]">
            CHOOSE YOUR BRAND 🤔
          </h1>
          <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-[2em] place-items-center'>

            <a href='/products/adidas' className="flex justify-center items-center bg-white w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
              <img src={require("../../assets/png/shoebrands/adidas.png")} alt="adidasImage" className="w-[50px] h-[50px]" />
            </a>

            <a href='/products/nike' className="flex justify-center items-center bg-white w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
              <img src={require("../../assets/png/shoebrands/nike.png")} alt="nikeImage" className="w-[50px] h-[50px]" />
            </a>

            <a href='/products/air jordan' className="flex justify-center items-center bg-white w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
              <img src={require("../../assets/png/shoebrands/jordan.png")} alt="nikeImage" className="w-[50px] h-[50px]" />
            </a>

            <a href='/products/champion' className="flex justify-center items-center bg-white  w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
              <img src={require("../../assets/png/shoebrands/champion.png")} alt="championImage" className="w-[50px] h-[50px]" />
            </a >
            <a href='/products/new balance' className="flex justify-center items-center bg-white w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
              <img src={require("../../assets/png/shoebrands/new-balance.png")} alt="newbalanceImage" className="w-[50px] h-[50px]" />
            </a>
            <a href='/products/asics' className="flex justify-center items-center bg-white  w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
              <img src={require("../../assets/png/shoebrands/asics.png")} alt="onitsuka-tiger" className="w-[50px] h-[50px]" />
            </a >
            <a href='/products/puma' className="flex justify-center items-center bg-white  w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
              <img src={require("../../assets/png/shoebrands/puma.png")} alt="pumaImage" className="w-[50px] h-[50px]" />
            </a>
            <a href='/products/vans' className="flex justify-center items-center bg-white  w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] rounded-[15px] hover:scale-105 transform transition-all duration-75 ">
            <img src={require("../../assets/png/shoebrands/vans.png")} alt="onitsuka-tiger" className="w-[50px] h-[50px]" />
            </a>

          </section>
          <span className='z-10 self-center text-[#DCBA62]'>More Brands to Come! </span>

        </section>
      </div>


    </div>
  )
}

export default brands