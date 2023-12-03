import React from 'react';

const Spinner = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[250px] lg:mt-[400px]'>
            <div className='h-10 w-10 border-mainFont border-[5px] rounded-xl animate-spin mb-3'>
            </div>
            <h2 className='text-mainFont text-[35px]'>Loading from the server...</h2>
        </div>
    );
};

export default Spinner;
