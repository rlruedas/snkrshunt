import React, { useEffect, useState } from 'react';

function navbar(props) {
    const { dimension } = props;

    const HomeDesktopNavBar = () => {
        return (
            <header className='absolute top-0 w-screen min-h-[5em] z-10 backdrop-blur-sm'>
                <section className='flex flex-row relative w-full min-h-[5em] justify-around items-center place-items-center'>
                    <a href='/'>
                        <img src={require("../../assets/png/logo.png")} alt="logo" className='w-[80px] h-[80px] left-[15em]' />
                    </a >
                    <section className='flex flex-row '>
                        <span onClick={() => { document.querySelector("#brands").scrollIntoView({ behavior: 'smooth' })}} className='cursor-pointer font-Montserrat font-normal text-[15px] mx-[2em] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>COLLECTIONS</span>
                        <a href="/about" className=' font-Montserrat font-normal text-[15px] mx-[2em] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>ABOUT</a>
                    </section>
                </section>
            </header>
        )
    }

    const HomeMobileNavBar = () => {
        const [isPressed, setPressed] = useState(false);

        useEffect(() => {
            const sideBar = document.querySelector(".homesidebar");
            const menuButton = document.querySelector(".open-menu")
            const closeButton = document.querySelector(".close-menu")

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
                <section className="absolute top-0 w-screen min-h-[5em] z-30 backdrop-blur-sm">
                    <div className="flex flex-row relative w-full min-h-[5em] gap-[6em] justify-around items-center place-items-center">
                        <a href='/'>
                            <img src={require("../../assets/png/logo.png")} alt="logo" className='w-[80px] h-[80px] left-[15em]' />
                        </a >
                        <button onClick={() => setPressed(!isPressed)} className='z-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-list open-menu w-[40px] h-[40px] fill-black opacity-100 transition-all duration-500" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden bi bi-x-lg close-menu w-[40px] h-[40px] fill-black opacity-0 transition-all duration-500" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </button>
                    </div>
                    <section className="absolute top-0 w-screen h-screen bg-[#DCBA62] z-10 transform-gpu transition-transform duration-500 translate-x-[100%] homesidebar" >
                        <div className='flex flex-col w-screen h-screen  items-center'>
                            <section className='flex flex-col w-screen h-full justify-around items-center font-Montserrat'>
                                <ul className='leading-[5em] list-item text-center text-[30px]'  >
                                    <li onClick={() => { document.querySelector("#brands").scrollIntoView({ behavior: 'smooth' }); setPressed(!isPressed) }}>COLLECTIONS</li>
                                    <li ><a href="/about" >ABOUT</a></li>
                                </ul>
                                <ul className='text-center m-0 p-0 flex flex-row justify-around w-screen' >
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 29.94 29.94"
                                                version="1.1"
                                                viewBox="0 0 29.94 29.94"
                                                xmlSpace="preserve"
                                                className='w-[30px] h-[30px]  hover:fill-current hover:text-[#4d71d4]'
                                            >
                                                <path d="M27.56.684H2.383A2.38 2.38 0 000 3.064v23.813a2.381 2.381 0 002.383 2.379H27.56a2.382 2.382 0 002.38-2.379V3.064a2.382 2.382 0 00-2.38-2.38zm-7.435 8.483c-.619-.362-1.11-.648-1.727-.648-.604 0-1.12.151-1.384.405-.264.252-.395.74-.395 1.461v1.067h3.229l-.699 2.968h-2.53v9.862h-4.056V14.42H10.67v-2.968h1.895v-1.133c0-1.193.143-1.907.425-2.496.281-.587.826-1.241 1.584-1.611.757-.369 1.877-.555 3.036-.555 1.188 0 2.116.396 3.254.715l-.739 2.795z"></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px]  hover:fill-current hover:text-[#8a3ab9]'>
                                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                                                <circle cx="16.806" cy="7.207" r="1.078" />
                                                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://twitter.com/">
                                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 310 310" version="1.1" viewBox="0 0 310 310" xmlSpace="preserve" className='w-[30px] h-[30px]  hover:fill-current hover:text-[#00acee]'>
                                                <g>
                                                    <path d="M302.973 57.388a117.512 117.512 0 01-14.993 5.463 66.276 66.276 0 0013.494-23.73 5 5 0 00-7.313-5.824 117.994 117.994 0 01-34.878 13.783c-12.381-12.098-29.197-18.983-46.581-18.983-36.695 0-66.549 29.853-66.549 66.547 0 2.89.183 5.764.545 8.598C101.163 99.244 58.83 76.863 29.76 41.204a5.001 5.001 0 00-8.196.642c-5.896 10.117-9.013 21.688-9.013 33.461 0 16.035 5.725 31.249 15.838 43.137a56.37 56.37 0 01-8.907-3.977 5 5 0 00-7.427 4.257c-.007.295-.007.59-.007.889 0 23.935 12.882 45.484 32.577 57.229a57.372 57.372 0 01-5.063-.735 4.998 4.998 0 00-5.699 6.437c7.29 22.76 26.059 39.501 48.749 44.605-18.819 11.787-40.34 17.961-62.932 17.961a120.4 120.4 0 01-14.095-.826 5 5 0 00-3.286 9.174c29.023 18.609 62.582 28.445 97.047 28.445 67.754 0 110.139-31.95 133.764-58.753 29.46-33.421 46.356-77.658 46.356-121.367 0-1.826-.028-3.67-.084-5.508 11.623-8.757 21.63-19.355 29.773-31.536a5 5 0 00-6.182-7.351z"></path>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>

                    </section>

                </section>
            </>
        )
    }


    return (
        <>
            {dimension.width <= 768 ? <HomeMobileNavBar /> : <HomeDesktopNavBar />}
        </>
    )
}

export default navbar