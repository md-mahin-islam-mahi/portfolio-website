import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
    
        {/* Starts About Section */}
    <div id='about' className='xl:px-20'>
        <div className='flex flex-col xl:flex-row justify-between items-center px-3 lg:px-20 mt-10 md:mt-16'>
          {/* image section */}
          <section className='lg:w-[40%]'>
            <div data-aos="fade-up-right">
              <img className='img h-[250px] md:h-[300px] lg:h-auto xl:h-full w-full' src="https://i.ibb.co/xfVcLy6/final.png" alt="Mahin" />
            </div>
          </section>

          {/* text section for sm device */}
          <section className='lg:w-[50%] lg:hidden'>
            <div>
              <h2 className='text-start text-[16px] mt-10 mb-10 md:mt-0 md:text-[20px] xl:text-[24px] px-7 md:px-0 font-default text-[#ffffff88]'>
              <div className='font-default text-[22px] md:text-[26px] lg:text-[35px] mt-10 text-[#ffffff]'>
                Well, here is a short introduction of me...
              </div> <br />

              <div>
                I am Md. Mahin Islam Mahi. I call myself a web developer, although I'm not that much of an expert. I wanted to start freelancing as a Graphic Designer. But due to lack of creativity, I could not go so far. Later I decided to move on web development and did a course in <a target='_blank' className='font-bold text-[#aa0ab2]' href="https://programming-hero.com">Programming Hero</a> and got a blackbelt <a target='_blank' className='text-[18px] md:text-[22px] lg:text-[26px] text-mainFont' href="https://drive.google.com/file/d/1OLV4jmT5VxW_alPo0NeycbzEdv9hbPqw/view?usp=sharing">Certificate</a>. I thought maybe I can do something good here. And so I am still learning and trying for that purpose.
              </div> <br />

              <div>
                I have a little bit knowledge in Graphic Design and Designing Softwares. But Programming and other technologies attracts me much. I wish if I could be an Ethical Hacker and Cyber Security Expert. Fot this reason, I started to explore Linux and Linux based Operating Systems and now I use it as my Daily Driver. Did I mention that I use Arch Linux?
              </div> <br />
              </h2>
            </div>
          </section>

          {/* text section for lg device */}
          <section className='hidden lg:flex lg:w-[50%]'>
            <div data-aos="fade-up-left">
              <h2 className='text-start text-[16px] mt-10 mb-10 md:mt-0 md:text-[20px] xl:text-[24px] px-7 md:px-0 font-default text-[#ffffff88]'>
              <div className='font-default text-[22px] md:text-[26px] lg:text-[35px] mt-10 text-[#ffffff]'>
                Well, here is a short introduction of me...
              </div> <br />

              <div>
                I am Md. Mahin Islam Mahi. I call myself a web developer, although I'm not that much of an expert. I wanted to start freelancing as a Graphic Designer. But due to lack of creativity, I could not go so far. Later I decided to move on web development and did a course in <a target='_blank' className='font-bold text-[#aa0ab2]' href="https://programming-hero.com">Programming Hero</a> and got a blackbelt <a target='_blank' className='text-[18px] md:text-[22px] lg:text-[26px] text-mainFont' href="https://drive.google.com/file/d/1OLV4jmT5VxW_alPo0NeycbzEdv9hbPqw/view?usp=sharing">Certificate</a>. I thought maybe I can do something good here. And so I am still learning and trying for that purpose.
              </div> <br />

              <div>
                I have a little bit knowledge in Graphic Design and Designing Softwares. But Programming and other technologies attracts me much. I wish if I could be an Ethical Hacker and Cyber Security Expert. Fot this reason, I started to explore Linux and Linux based Operating Systems and now I use it as my Daily Driver. Did I mention that I use Arch Linux?
              </div> <br />
              </h2>
            </div>
          </section>
        </div>
    </div>
    </>
  )
}

export default About;