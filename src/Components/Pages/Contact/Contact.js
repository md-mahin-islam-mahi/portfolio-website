import React, { useRef } from 'react'
import './Contact.css'
// import Animation from '../Animation/Animation';

const Contact = () => {
  const form = useRef()

  // const sendMail = e => {
    
  // }

  return (
    // <Animation>
    <div id='contact' className='h-screen'>
      <div data-aos="fade-up">
        <h1 className='under-line font-fancy text-[36px] md:text-[46px] lg:text-[60px] text-mainFont'>Contact Me</h1>
      </div>
      <div data-aos="fade-up">
        <form ref={form} action="" className='flex flex-col justify-center items-center px-2 mt-20 md:mt-40'>
          {/* name */}
          <div className='w-[70%] md:w-[30%]'>
            <input type="text" name="fullName" className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-fancy tracking-wider text-mainFont bg-mainBg mb-2 placeholder:text-mainFont outline-none" placeholder='Name' />
          </div>

          {/* phone and email */}
          <div className='flex flex-col md:flex-row md:justify-between md:items-center w-[70%] md:w-[30%]'>
            <input type="text" name="phone" className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-fancy tracking-wider text-mainFont bg-mainBg mb-2 md:mr-1 placeholder:text-mainFont outline-none" placeholder='Phone Number'/>
            <input type="email" name="email" id="" placeholder='Email' className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-fancy tracking-wider text-mainFont bg-mainBg mb-2 md:ml-1  placeholder:text-mainFont outline-none"/>
          </div>

          {/* Message  */}
          <div className='w-[70%] md:w-[30%] h-[100px] mt-1 flex justify-center items-center'>
            <input type="text" placeholder='Your Valuable Message' className="shade w-full h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-fancy tracking-wider text-mainFont bg-mainBg mb-2 placeholder:text-mainFont outline-none"/>
          </div>
          <input type="submit" value="Send" className="shade w-[70%] md:w-[30%] mt-2 h-full rounded-md border-2 px-2 py-1 pl-5 text-[24px] font-fancy tracking-wider text-mainFont bg-mainBg mb-2 mr-1 placeholder:text-mainFont outline-none"/>
        </form>
      </div>
    </div>
    // </Animation>
  )
}

export default Contact;