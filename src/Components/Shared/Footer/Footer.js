import React from 'react'
import { FaFacebook, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import copy from 'copy-to-clipboard';
import toast from 'react-hot-toast';
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional


const Footer = () => {
    const copyText = () => {
        copy("+8801627116937");
        toast.success("Phone number coppied to clipboard")
      }
      const copyMail = () => {
        copy ("wdmahin.mhm@gmail.com");
        toast.success("Gmail coppied successfully")
      }

  return (
    
    <div>
      <span className='block w-[80%] mx-auto h-[2px] bg-mainFont mt-[100px] rounded-md text-center'></span>

      <div className='flex flex-col  justify-start items-start py-10 md:py-10 lg:py-3 text-[12px] md:text-[15px] lg:text-[18px] ml-[50px] mr-[50px] mt-4 md:flex-row md:justify-between md:items-center'>
      <div className='text-start text-[#ffffff88] text[15px]'>
        <h3 className='flex flex-col'>
        For more details, please contact me on: <br />
            <Tippy render={attrs => (
                <div className="bg-mainBg border-[2px] text-mainFont pt-2 pb-2 pl-3 pr-3 rounded-md" tabIndex="-1" {...attrs}>
                    Click to copy phone number
                </div>
            )}>
            <div data-tooltip="Click to copy phone number" className='flex items-center mt-3 cursor-pointer text-[20px] md:text-[24px]' onClick={copyText}>
                    <FaPhoneAlt className  ='mr-3 text-mainFont hover:text-[#ffffff88]' /> +8801627116937
                    <br />
            </div>
            </Tippy>

            <div className='flex justify-start items-center mt-3 text-mainFont text-[20px] md:text-[24px]'>
                <SiGmail className='mr-3 transition-all cursor-pointer' onClick={copyMail}/>
                <a target='_blank' href="https://www.linkedin.com/in/md-mahin-islam-mahi">
                    <FaLinkedin className='mr-3 transition-all cursor-pointer' /> </a>
                <a target='_blank' href="https://github.com/md-mahin-islam-mahi">
                    <FaGithub className='mr-3 transition-all cursor-pointer'  />
                </a>
                <a target='_blank' href="https://www.facebook.com/mahin.mhm ">
                    <FaFacebook className='mr-3 transition-all cursor-pointer'/></a>
                <a target='_blank' href="https://www.instagram.com/mahin_bhau">
                    <AiFillInstagram className='mr-3 transition-all cursor-pointer text-[24px] md:text-[28px]' /></a>
            </div>
        </h3>
      </div>

      <div>
        <h3 className='text-start mt-10 md:text-end text-[#ffffff88] font-[15px]'>
        This website is still under development. <br />
        Thank you for visiting here.
        </h3>
      </div>
    </div>
    </div>
  )
}

export default Footer;