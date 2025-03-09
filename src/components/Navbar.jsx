import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleMenu = () => {
        setNav(!nav);
    };

    return (
        <nav className='flex items-center justify-between mx-auto max-w-[1240px] h-20 px-4'>
            <h1 className='text-3xl w-full font-bold text-[#00df9a]'>Salarmrd.</h1>
            
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div onClick={handleMenu} className='md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'fixed bg-[#000300] left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500' : "fixed left-[-100%] ease-in-out duration-500"}>
                <h1 className='text-3xl w-full font-bold text-[#00df9a] ml-4 mt-5'>React.</h1>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
