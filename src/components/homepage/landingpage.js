import React from 'react'


function landingpage(props) {

  const handleClick = (e) => {
    e.preventDefault();

    document.getElementById("brands").scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <div className='min-h-fit w-screen font-Montserrat transform-cpu transition-all duration-100 ' >
        <div className=" bg-LandingPageBG bg-cover opacity-50 absolute top-0 h-full w-screen z-0"></div>
        <div className="flex flex-col justify-end items-center w-screen min-h-screen gap-[7em] pt-[8em] xl:pt-0 ">
          <section className="flex flex-col gap-10 items-center w-[90%] h-[90%] z-10 lg:flex-row justify-center lg:pb-[0em]  lg:gap-20  lg:justify-center lg:items-center">
            <section className="flex flex-col justify-start items-center sm:items-start text-center sm:text-justify gap-[2em] ">
              <span className=' font-light text-[30px] lg:text-[30px] 2xl:text-[50px] leading-[40px]  2xl:leading-[73px] backdrop-blur-[2px]  rounded-lg  '>Looking for your <span className='font-black'>SHOES</span><br/> has never been this <span className="font-black">EASY</span></span>
              <span className='font-medium lg:text-[12px] 2xl:text-[18px] backdrop-blur-[2px] rounded-lg'>Just browse your favorite <span className="font-black">SNEAKERS</span></span>
            </section>
            <img src={require("../../assets/png/LandingPageBrands.webp")} alt="brandImages" className='rounded-[10px] w-[450px] h-[300] 2xl:w-[614px] 2xl:h-[373px]' />
          </section>
          <span className="hidden md:block transform -rotate-90 absolute right-0 translate-x-[18em] -translate-y-[25em]  font-normal text-[12px] z-10">Disclaimer // This website's purspose is only for you to browse new released sneakers</span>

          <section className="flex flex-col justify-center items-center z-10 gap-7 ">
            <span className='font-medium text-[12px] lg:text-[18px] 2xl:text-[20px]' >Discover <span className='font-black'>New Releases</span> from brands of your choice </span>
            <a href="true" onClick={handleClick}><svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 1792 1792"
              version="1.1"
              viewBox="0 0 1792 1792"
              xmlSpace="preserve"
              className='w-[30px] h-[30px] 2xl:w-[50px] 2xl:h-[50px] animate-bounce'
            >
              <path d="M983.3 1532.1c-23.2 23.6-55.6 35.9-88.6 33.6-31.9 2.4-63-10-84.6-33.6L261.8 985.8c-45.4-45.4-45.4-119 0-164.4s119-45.4 164.4 0l354.4 354.4V342.1c-.4-63.8 51-115.8 114.8-116.1h.7c64 .4 115.8 52.1 116.1 116.1v833.6l353.7-354.4c45.4-45.4 119-45.4 164.4 0 45.4 45.4 45.4 119 0 164.4l-547 546.4z"></path>
            </svg></a>

          </section>

        </div>
      </div>
    </>
  )
}

export default landingpage