import React from 'react'


function landingpage(props) {

  return (
    <>
      <div className='h-screen w-screen font-Montserrat transform-cpu transition-all duration-100' >
        <div className=" bg-LandingPageBG bg-cover opacity-50 absolute top-0 h-screen w-screen z-0"></div>
        <div className="flex flex-col justify-center items-center w-screen h-screen 2xl:pt-[5em] ">

          <section className="flex flex-col gap-10 items-center w-[90%] h-[90%] z-10 lg:flex-row justify-end pb-[4em] lg:pb-[0em]  lg:gap-20  lg:justify-center lg:items-center">
            <section className="flex flex-col justify-center items-center ">
              <span className=' font-extrabold text-center text-[30px] 2xl:text-[60px] leading-[30px] 2xl:leading-[73px] '>LET'S BE <br /> STRAIGHTFORWARD</span>
              <span className='font-medium text-center lg:text-[18px] 2xl:text-[30px] lg:pt-[4em]'>You just want to browse your  <br /> <span className="font-black">SNEAKERS</span></span>
            </section>
            <img src={require("../../assets/png/LandingPageBrands.webp")} alt="brandImages" className='rounded-[20px] w-[450px] h-[300] 2xl:w-[614px] 2xl:h-[373px]' />
          </section>
          <span className="hidden md:block transform -rotate-90 absolute right-0 translate-x-[18em]  font-normal text-[12px] z-10">Disclaimer // This website's purspose is only for you to browse new released sneakers</span>

          <section className="flex flex-col justify-center items-center z-10 gap-7 ">
            <span className='font-medium text-[12px] lg:text-[18px] 2xl:text-[20px]' >Discover <span className='font-black'>New Releases</span> from brands of your choice </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 1792 1792"
              version="1.1"
              viewBox="0 0 1792 1792"
              xmlSpace="preserve"
              className='w-[30px] h-[30px] 2xl:w-[50px] 2xl:h-[50px] animate-bounce'
            >
              <path d="M983.3 1532.1c-23.2 23.6-55.6 35.9-88.6 33.6-31.9 2.4-63-10-84.6-33.6L261.8 985.8c-45.4-45.4-45.4-119 0-164.4s119-45.4 164.4 0l354.4 354.4V342.1c-.4-63.8 51-115.8 114.8-116.1h.7c64 .4 115.8 52.1 116.1 116.1v833.6l353.7-354.4c45.4-45.4 119-45.4 164.4 0 45.4 45.4 45.4 119 0 164.4l-547 546.4z"></path>
            </svg>
          </section>

        </div>
      </div>
    </>
  )
}

export default landingpage