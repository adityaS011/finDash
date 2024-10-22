import React from 'react';

const HomePageLoader = () => {
  return (
    <div className='flex flex-col px-4 w-full bg-gray-200 md:px-12 pt-8 no-scrollbar pb-10 overflow-x-hidden'>
      <h1 className='w-full text-xl font-medium p-2 mx-2 font-sans text-[#4b0034]'>
        Welcome to FinDash!
      </h1>
      <div className='mt-2 flex flex-col md:flex-row w-full gap-6'>
        <div className='flex flex-col gap-3'>
          <div className='w-[250px] gap-3 mb-5 shadow-xl border-1 rounded-md animate-pulse bg-white p-4'>
            <div className='h-8 bg-[#dfdede] rounded w-3/4 mb-2'></div>
            <div className='h-6 bg-[#dfdede] rounded w-full mb-2'></div>
            <div className='h-6 bg-[#dfdede] rounded w-full mb-2'></div>
          </div>
          <div className='w-[250px] gap-3 mb-5 shadow-xl border-1 rounded-md animate-pulse bg-white p-4'>
            <div className='h-8 bg-[#dfdede] rounded w-3/4 mb-2'></div>
            <div className='h-6 bg-[#dfdede] rounded w-full mb-2'></div>
            <div className='h-6 bg-[#dfdede] rounded w-full mb-2'></div>
          </div>
        </div>

        <div className='w-full bg-white gap-3 overflow-hidden mb-5 shadow-xl border-1 rounded-md'>
          <div className='text-[#4b0034] pt-4 px-4 font-medium text-xl w-full flex flex-row justify-center uppercase'>
            <u>Expense Tracks</u>
          </div>
          <div className='flex flex-col md:flex-row'>
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className='flex-1 bg-white p-4 shadow-md border-1 rounded-md animate-pulse mx-2 mb-2'
              >
                <div className='h-6 bg-[#dfdede] rounded w-full mb-2'></div>
                <div className='h-4 bg-[#dfdede] rounded w-3/4 mb-2'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLoader;
