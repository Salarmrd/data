import React from 'react';
import Laptop from "../Assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 '>
            <img src={Laptop} alt="/" className='w-[500px] mx-auto'/>
            <div className='flex flex-col justify-center pt-4'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h2 className='text-black font-bold text-2xl md:text-4xl'>Manage Data Analytics Centrally</h2>
                <p className='text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente tenetur dicta, fugiat doloribus quisquam numquam architecto incidunt libero omnis quasi.  </p>
                <button className='bg-black w-[200px] rounded  py-1 px-5 mt-4  text-[#00df9a] font-medium'>Get started</button>
                </div>
        </div>
    </div>
  )
}

export default Analytics