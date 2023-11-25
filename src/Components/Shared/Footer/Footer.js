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
      <span className='block w-full h-[2px] bg-mainFont mt-[100px] rounded-md text-center'></span>
      <div className='flex justify-between items-center ml-[50px] mr-[50px] mt-4'>
      <div className='text-start text-[#ffffff88] text[15px]'>
        <h3 className='flex flex-col'>
        For more details, please contact me on: <br />
            <Tippy render={attrs => (
                <div className="bg-mainBg border-[2px] text-mainFont pt-2 pb-2 pl-3 pr-3 rounded-md" tabIndex="-1" {...attrs}>
                    Click to copy phone number
                </div>
            )}>
            <div data-tooltip="Click to copy phone number" className='flex items-center mt-3 cursor-pointer' onClick={copyText}>
                    <FaPhoneAlt className  ='mr-3 text-mainFont hover:text-[#ffffff88]' /> +8801627116937
                    <br />
            </div>
            </Tippy>

            <div className='flex justify-start items-center mt-3 text-mainFont'>
                <SiGmail className='mr-3 hover:text-[#ffffff88] text-[24px] transition-all cursor-pointer' onClick={copyMail}/>
                <a target='_blank' href="https://www.linkedin.com/in/md-mahin-islam-mahi">
                    <FaLinkedin className='mr-3 hover:text-[#ffffff88] text-[24px] transition-all cursor-pointer' /> </a>
                <a target='_blank' href="https://github.com/md-mahin-islam-mahi">
                    <FaGithub className='mr-3 hover:text-[#ffffff88] text-[24px] transition-all cursor-pointer'  />
                </a>
                <a target='_blank' href="https://www.facebook.com/mahin.mhm ">
                    <FaFacebook className='mr-3 hover:text-[#ffffff88] text-[24px] transition-all cursor-pointer'/></a>
                <a target='_blank' href="https://www.instagram.com/mahin_bhau">
                    <AiFillInstagram className='mr-3 hover:text-[#ffffff88] text-[28px] transition-all cursor-pointer' /></a>
            </div>
        </h3>
      </div>

      <div>
        <h3 className='text-end text-[#ffffff88] font-[15px]'>
        This website is still under development. <br />
        Thank you for visiting here.
        </h3>
      </div>
    </div>
    </div>
  )
}

export default Footer;