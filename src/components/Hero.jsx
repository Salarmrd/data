import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div >
        <div className='text-center h-screen justify-center w-full max-w-[800px] mx-auto px-2W flex flex-col'>
        <p className='text-[#00df9a] uppercase font-bold '>growing with data analytics</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Grow with data.</h1>
        <div className='flex justify-center py-2'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast,flexible financing for  </p>
        <ReactTyped
      strings={[
        "BTC",
        "BTS",
        "SASS",
      ]}
      typeSpeed={140}
      backSpeed={150}
      loop
      className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 mt-1'/>
        </div>
        <p className='mt-5 md:text-2xl text-xl font-bold text-gray-400'>Monitor your data analytics to increase revenue for BTB, BTC, &  SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded mx-auto py-1 px-5 mt-6 text-black font-bold'>Get started</button>
        </div>
        
    </div>
  )
}

export default Hero