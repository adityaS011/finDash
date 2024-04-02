import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  return (
    <div className="mt-7 flex overflow-hidden h-fit px-3 py-1 justify-between w-full">
      <div className='flex  p-2 rounded-2xl'>
        <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-slate-400 text-2xl" />
        <h2 className='font-[500] text-gray-800'>Organization</h2>
      </div>
      <div className='flex '>
        <FontAwesomeIcon icon={faUserCircle} className="mr-2 text-slate-400 text-2xl " />
        <h2 className='font-[500] pr-4 text-gray-800'>Account</h2>
      </div>
    </div>
  );
};

export default Navbar;
