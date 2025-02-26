import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div >
        <div className='text-center h-screen justify-center w-full max-w-[800px] mx-auto flex flex-col'>
        <p className='text-[#00df9a] uppercase font-bold p-2'>growing with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex justify-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast,flexible financing for </p>
        <ReactTyped
      strings={[
        "BTC",
        "BTS",
        "SASS",
      ]}
      typeSpeed={140}
      backSpeed={150}
      loop
      className='md:text-5xl sm:text-4xl text-xl font-bold pl-1'/>
        </div>
        <p>Monitor your data analytics to increase revenue for BTB, BTC, &  SASSS platform.</p>
        </div>
        
    </div>
  )
}

export default Hero