import React from 'react'
// import './About.css'
// import Animation from '../Animation/Animation'

const About = () => {
  return (
    // <Animation>
    <div id='about' className='h-screen xl:px-20'>
      <div>
        <h1 className='under-line font-fancy text-[36px] md:text-[46px] lg:text-[60px] text-mainFont'>ABOUT ME</h1>
      </div>
        <div className='flex flex-col lg:flex-row justify-between items-center px-3 lg:px-24 mt-10 md:mt-16'>
          {/* image section */}
          <section className='lg:w-[40%]'>
            <div data-aos="zoom-in-right">
              <img className='h-[250px] md:h-[300px] lg:h-[400px] xl:h-[600px] w-auto' src="https://i.ibb.co/gJ3NCRK/image2-01.png" alt="Mahin" />
            </div>
          </section>

          {/* text section */}
          <section className='lg:w-[40%]'>
            <div data-aos="zoom-out-left">
              <h2 className='text-center lg:text-end text-[18px] mt-10 md:mt-0 md:text-[24px] xl:text-[30px] px-7 md:px-0 font-default'>
              I am Md. Mahin Islam Mahi. <br />
              I am a Frontend web developer. <br />
              I develop web applications using
              React Js, Next Js, HTML, CSS, JavaScript. <br />
              I use Bootstrap and Tailwind CSS to decorate the UI. <br />
              I am also skilled in developing the server side using Node js,
              Express Js. <br /> I use MongoDB as the Database. <br />
              But I am very much focused on the Frontend part.
              </h2>
            </div>
          </section>
        </div>
    </div>
    // </Animation>
  )
}

export default About;