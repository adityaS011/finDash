import Image from 'next/image';
import React from 'react';

const BouncingLoader = () => {
  return (
    <div className='w-full  flex flex-col gap-3 justify-center items-center p-2 '>
      <div className='flex flex-col items-center justify-center bg-green-400 w-fit gap-2 p-3 shadow-xl shadow-slate-400 animate-bounce text-gray-50 rounded-xl'>
        <Image src={'/loading_icon.png'} width={40} height={20} alt='icon' />
        <p className='animate-pulse text-gray-700'>Loading...</p>
      </div>
    </div>
  );
};

export default BouncingLoader;
