import React, { useEffect, useState } from 'react';
import ShowSkill from './ShowSkill';

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
        <div id='skills' className='px-3 font-default z-[-5]'>
            <h1 className='text-[40px] md:text-[60px] text-start mt-3 xl:mt-10 md:ml-5 xl:ml-20'>Technologies I know...</h1>
            <section className='md:grid grid-cols-2 xl:grid-cols-4 my-3'>
                {
                    skills.map(skill => <ShowSkill 
                        key={skill.id}
                        skill={skill}
                         />)
                }
            </section>
        </div>
    );
};

export default Skills;