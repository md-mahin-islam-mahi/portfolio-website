import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { LuBarChart } from "react-icons/lu";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='flex flex-col items-center w[100%] pl-10 pr-10 pt-5 pb-20 mb-0 navbar lg:hidden sticky top-0 ease-in-out duration-[0.2s]'>

                {/* hamburger menu*/}
                <div className='absolute top-5 right-5 text-5xl text-gray-500 lg:hidden z-20 rotate-[270deg] text-mainFont'>
                    {
                        open ? <HiX onClick={() => setOpen(!open)} /> : <LuBarChart onClick={() => setOpen(!open)} />
                    }
                </div>

                    {/* nav bar for mobile */}
                <div className={`nav-links flex flex-col justify-between items-center w-[100%] h-auto pt-5 bg-navBg absolute top-0 ${open ? 'top-0 pb-10 shadow-md' : 'top-[-200px]'} text-mainFont`}>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer}' to="/">Home</NavLink>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/about">About</NavLink>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/skills">Skills</NavLink>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/projects">Projects</NavLink>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/blog">Blog</NavLink>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/contact">Contact Me</NavLink>
                </div>
            </nav>

                    {/* nav bar for pc */}
            <nav className='hidden lg:flex flex-row justify-between items-center pl-10 pr-10 pt-5 pb-5 mb-0 navbar sticky top-0 backdrop-blur-md bg-white/30 text-mainFont'>

                <div className='nav-links'>
                    <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/">Home</NavLink>
                    <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/about">About</NavLink>
                    <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/skills">Skills</NavLink>
                    <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/projects">Projects</NavLink>
                    <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/blog">Blog</NavLink>
                    <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/contact">Contact Me</NavLink>
                </div>
            </nav>
        </>
    );
};

export default Header;