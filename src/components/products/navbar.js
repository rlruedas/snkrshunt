import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function NavBar() {

  const size = useWindowDimension();
  const params = useParams();

  const DesktopNavBar = () => {
    return (
      <>
        <div className='flex flex-row sticky top-0 justify-center items-center h-[5em] w-screen border-b-2 border-black font-Montserrat bg-[#DCBA62] z-20' >
          <a href="/" className="absolute left-[2em] lg:left-[15em] ">
            <img src={require("../../assets/png/logo.png")} alt="logo" className='w-[80px] h-[80px] ' />
          </a>
          <div className="flex flex-row items-center gap-[5em] ">
            <a href={`/products/${params.id}/men`}>MENS</a>
            <span className='text-[30px]'>|</span>
            <a href={`/products/${params.id}/women`}>WOMENS</a>
            <span className='text-[30px]'>|</span>
            <a href={`/products/${params.id}/kids`}>KIDS</a>
          </div>
        </div>

      </>
    )
  }

  const MobileNavBar = () => {
    const [isPressed, setPressed] = useState(false)

    useEffect(() => {
      const sideBar = document.querySelector(".product-side-bar");
      const menuButton = document.querySelector(".bi-list")
      const closeButton = document.querySelector(".bi-x-lg")

      if (isPressed) {
        sideBar.classList.remove("translate-x-[100%]");
        sideBar.classList.add("translate-x-[0%]");
        menuButton.classList.remove("static", "opacity-100");
        menuButton.classList.add("hidden", "opacity-0");
        closeButton.classList.remove("hidden", "opacity-0");
        closeButton.classList.add("static", "opacity-100");
      } else {
        sideBar.classList.remove("translate-x-[0%]")
        sideBar.classList.add("translate-x-[100%]")
        menuButton.classList.remove("hidden", "opacity-0");
        menuButton.classList.add("static", "opacity-100");
        closeButton.classList.remove("static", "opacity-100");
        closeButton.classList.add("hidden", "opacity-0");
      }

    }, [isPressed])

    return (
      <>
        <div className='flex flex-row sticky top-0 justify-between px-[2em] items-center h-[5em] w-screen border-b-2 border-black font-Montserrat z-20 bg-[#DCBA62]' >
          <a href='/'>
            <img src={require("../../assets/png/logo.png")} alt="logo" className='w-[80px] h-[80px] left-[15em]' />
          </a >
          <button onClick={() => setPressed(!isPressed)} className="z-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list w-[40px] h-[40px] fill-black opacity-100 transition-all duration-500" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden bi bi-x-lg w-[40px] h-[40px] fill-white opacity-0 transition-all duration-500" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          <div className="absolute top-0 flex flex-col right-0 w-[70%] h-screen bg-black text-white font-black justify-center items-center gap-[4em] z-20 product-side-bar transform transition-all duration-200 translate-x-[100%] ">
            <a href={`/products/${params.id}/men`}>MENS</a>
            <a href={`/products/${params.id}/women`}>WOMENS</a>
            <a href={`/products/${params.id}/kids`}>KIDS</a>
          </div>
        </div>
      </>
    )
  }



  return (
    <>
      {
        size.width < 768 ? <MobileNavBar /> : <DesktopNavBar />
      }
    </>

  )
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

export default NavBar