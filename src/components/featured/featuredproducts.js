import React from 'react'

import FavCarousel from './productscarousel'

function FeaturedProducts() {


  
  return (
    <>
      <div className="flex flex-col w-screen h-screen justify-center items-center bg-white font-Montserrat" >
        <section className='flex flex-col w-screen flex-[1_1_0%] justify-evenly items-center'>
          <section className='flex flex-row w-screen justify-between'>
            <span className='text-[60px] transform translate-x-[40px]  '>💸</span>
            <span className='font-semibold text-[12px] max-w-[150px] self-end mr-[5em] '>{`//Find your happy in our new collection of boots & booties 😜//`}</span>
          </section>
          <span className='font-semibold text-[12px] max-w-[150px] self-start ml-[3em]'>{`//Drop your summertime plans this weekend and be here in these new Nikes. . . 👟//`}</span>
          <h1 className='font-black text-[38px] tracking-widest'>{`WHAT'S HOT 🔥`}</h1>
        </section>
        <section className='flex flex-1 w-screen justify-center items-center'>
          <FavCarousel />
        </section>
        <section className='flex flex-1 flex-col w-screen justify-evenly items-center'>
          <section className='flex flex-row text-[40px] w-screen justify-between items-center'>
            <span className='font-semibold text-[12px] max-w-[150px] ml-[5em] '>{`//New shoes are like new pillows–they just make a room feel brand new!//`}</span>
            <span className='text-[50px] transform -translate-x-[50px]  translate-y-[20px]'>😋</span>
          </section>
          <section className='flex flex-row text-[40px] w-screen justify-between items-center'>
            <span className='text-[50px] transform translate-x-[50px]  -translate-y-[20px]'>🤑</span>
            <span className='font-semibold text-[12px] max-w-[150px] self-end mr-[5em]'>{`//Just because you’ve got a new pair of kicks doesn’t mean you no longer have to go the extra mile.//`}</span>
          </section>
        </section>
      </div>
    </>
  )
}

export default FeaturedProducts