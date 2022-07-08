import React from 'react'

function brands() {
  return (
    <div className='relative w-screen h-screen bg-black text-white font-Montserrat' id="brands" >
      <div className="bg-BrandPageBG bg-cover bg-bottom w-screen h-screen absolute bottom-0 z-0" ></div>
      <div className="relative flex flex-col justify-center items-center  z-10">
        <section className='relative flex flex-col w-[70%] h-screen gap-[2em] justify-center items-start' >
          <h1 className="font-extrabold text-[50px] text-[#DCBA62]">
            CHOOSE YOUR BRAND 🤔
          </h1>
          <section className='grid grid-cols-4 gap-[3em]  '>
            <div className="bg-white w-[180px] h-[180px] rounded-[15px] hover:scale-105"><svg>
              Adidas</svg>
            </div>

          </section>
        </section>
      </div>


    </div>
  )
}

export default brands