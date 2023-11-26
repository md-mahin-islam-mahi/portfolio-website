import React from 'react'
import './Home.css'
import copy from 'copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
// import Animation from '../Animation/Animation';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

  const copyText = () => {
    copy("wdmahin.mhm@gmail.com");
    toast.success("Gmail coppied to clipboard")
  }

  return (
    // <Animation>
    <div className='mb-[250px] font-default text-center md:mt-10 xl:mt-20'>
      <div className='flex flex-col items-center xl:flex-row justify-between xl:mx-auto xl:px-20'>

      {/* This is the info part */}
        <section className='xl:w-[40%] xl:text-start xl:pl-[100px]'>
          <div data-aos="fade-up-right">
          <h3 className='text-[16px] md:text-[18px] lg:text-[24px] xl:text-[28px] font-thin tracking-widest mb-3 font-default text-mainFont'>Hi, I am</h3>
          <h1 className='text-[38px] md:text-[45px] lg:text-[60px] xl:text-[66px] font-fancy tracking-wide mb-5'>
          <Typewriter
                  words={["Md. Mahin Islam Mahi"]}
                  cursor
                  cursorStyle='.'
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
            </h1>
          <h2 className='text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] px-10 md:px-20 xl:px-0 mb-3 text-[#ffffff80]'>
          <Typewriter
                  words={["An innovative Frontend Developer with expertise in HTML-5, CSS-3, React.js, Tailwind CSS, and Bootstrap. Proficient in Next.js, Node.js, Express.js and MongoDB. Eager learner passionate about embracing new technologies for cutting-edge web solutions."]}
                  // loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
                </h2>
          <h3 className='text-[#57CFD966] text-[18px] md:text-[18px] lg:text-[28px] mb-5 lg:mb-3'>Oh! I use Arch BTW.</h3>

            <a target='_blank' className='hover hidden xl:inline-block mt-3 text-mainFont uppercase border-2 border-bgMain px-5 py-3 rounded-xl text-[18px] tracking-wider' href="https://drive.google.com/file/d/1GkT6g0MVQSiOGJxy0b-UcvQ8jaP6G1l_/view?usp=sharing">Check out my Resume!</a>
          </div>
          

        </section>

        {/* Image part */}
        <section className='xl:w-[40%]'>
          <div data-aos="fade-up-left">
                <img src="https://i.ibb.co/9ykXYD2/img1.png" alt='Mahin' className='img h-[250px] md:h-[300px] lg:h-[400px] xl:h-[600px] w-auto'/>
          </div>
        </section>
        <a target='_blank' className='hover-down xl:hidden mt-10 text-mainFont uppercase border-2 border-bgMain px-5 py-2 rounded-lg text-[14px] md:text-[20px] tracking-wide' href="https://drive.google.com/file/d/1GkT6g0MVQSiOGJxy0b-UcvQ8jaP6G1l_/view?usp=sharing">Check out my Resume!</a>
      </div>
    </div>
    // </Animation>
  )
}

export default Home