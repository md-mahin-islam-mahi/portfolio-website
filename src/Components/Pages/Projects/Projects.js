import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <>
        {/* Icons Area */}
      <div className='hidden lg:flex flex-col justify-start items-start ml-10 sticky top-[100px] z-[500] '>
        <div className="line"></div>
          <a target='_blank' href="https://www.linkedin.com/in/md-mahin-islam-mahi/"><FaLinkedin className='my-2 text-[30px] text-mainFont icons' /> </a>
          <a target='_blank' href="https://github.com/md-mahin-islam-mahi"><FaGithub className='my-2 text-[30px] text-mainFont icons' /> </a>
        </div>
        
        <div id='projects' className='h-screen flex justify-center items-center'>
            <h1 className='text-[50px]'>My projects will be added here Soon...</h1>
        </div>
        </>
    );
};

export default Projects;