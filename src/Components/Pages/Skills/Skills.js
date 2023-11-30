import React, { useEffect, useState } from 'react';
import ShowSkill from './ShowSkill';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('https://md-mahin-portfolio-server.vercel.app/skills')
        .then(res => res.json())
        .then(data => {
            setSkills(data)
            console.log(data)
        })
    }, [])

    return (
        <>
        {/* Icons Area */}
    <div className='hidden lg:flex flex-col justify-start items-start ml-10 sticky top-[100px] z-[500] '>
    <div className="line"></div>
      <a target='_blank' href="https://www.linkedin.com/in/md-mahin-islam-mahi/"><FaLinkedin className='my-2 text-[30px] text-mainFont icons' /> </a>
      <a target='_blank' href="https://github.com/md-mahin-islam-mahi"><FaGithub className='my-2 text-[30px] text-mainFont icons' /> </a>
    </div>
        <div id='skills' className='px-3 font-default z-[-5]'>
            <h1 className='text-[40px] md:text-[60px] text-start mt-3 md:-mt-20 md:ml-5 xl:ml-20'>Technologies I know...</h1>
            <section className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 my-1'>
                {
                    skills.map(skill => <ShowSkill 
                        key={skill.id}
                        skill={skill}
                         />)
                }
            </section>
        </div>
        </>
    );
};

export default Skills;