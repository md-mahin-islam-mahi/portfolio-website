import React from 'react';
import "./Style.css"
import { RiStarSFill } from "react-icons/ri";

const ShowSkill = ({skill}) => {
    const {name, img, stars, skillRate} = skill;
    return (
        <div className='hover down flex flex-col justify-center items-center px-3 py-2 my-0 mx-auto mb-5 mt-20 bg-mainBg border-2 border-mainFont rounded-lg w-[200px] h-[250px] gap-3 relative overflow-hidden z-0'>
            <img className='h-[100px]' src={img} alt={name} />
            <h2 className='text-[30px] font-bold'>{name}</h2>
            <div className='card-items font-bold text-[30px] tracking-widest'>
                <div className='flex justify-center items-cener'>
                    <RiStarSFill className='mr-2 text-[#ffbb11]' /> <span>{stars}</span>
                </div>
                <p>
                    {skillRate}
                </p>
            </div>
        </div>
    );
};

export default ShowSkill;