import React from 'react'


const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full min-h-[6em] font-Poppins bg-[#DCBA62]">
      <span><a href="/">Home</a> | <a href="/about">About</a> </span>
      <span className='font-medium text-[8px] sm:text-[15px]'> ©2022 SNRKSHunt All Rights Reserved </span>

    </div>
  )
}

export default Footer