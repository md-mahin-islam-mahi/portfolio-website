import React, { useState } from 'react';

const ShowBlogs = ({blog}) => {
    const {_id, text, img, about} = blog;
    const textSplit = text.slice(0, 100);
    
    return (
        <div className='w-[80%] md:w-[60%] h-[500px] md:h-[800px] overflow-hidden border-2 border-mainFont mx-auto my-5 px-2 py-2 rounded-lg'>
            <div className='flex flex-col justify-center items-center gap-11'>
                <img className='w-full md:w-auto h-auto md:h-[500px]' src={img} alt="" />
                <div className='flex justify-between items-center'>
                    <h3>Blog No: {_id}</h3>
                    <h3 className='mx-10 text-[25px] font-bold font-fancy'>{about}</h3>
                </div>
                <p className='text-start' >{textSplit}
                    <span >...Read More</span>
                </p>

            </div>
        </div>
    );
};

export default ShowBlogs;