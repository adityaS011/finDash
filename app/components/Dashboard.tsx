import React from 'react';
import { financialData, mockAccounts } from './mockData';
import Column1 from './Column1';
import Column2 from './Column2';

const Dashboard: React.FC = () => {
  return (
    <div className='flex flex-col px-4 w-full  bg-gray-200 md:px-12 pt-8  no-scrollbar pb-10 overflow-x-hidden '>
      <h1 className='w-full text-xl font-medium p-2 mx-2  font-sans text-[#4b0034]'>
        Welcome to FinDash!
      </h1>
      <div className='mt-2 flex flex-col md:flex-row   w-full gap-6'>
        <Column1 mainAccounts={mockAccounts} />

        <div className='w-full bg-white gap-3 overflow-hidden mb-5 shadow-xl border-1  rounded-md'>
          <div className='text-[#4b0034]  pt-4 px-4 font-medium text-xl w-full flex flex-row justify-center uppercase'>
            <u>Expense Tracks</u>
          </div>
          <div className='flex flex-col md:flex-row '>
            <Column2 financialData={financialData} />

            <Column2 financialData={financialData} />

            <Column2 financialData={financialData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
