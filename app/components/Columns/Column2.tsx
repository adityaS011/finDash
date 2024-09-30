'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleRight,
  faInfoCircle,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FinancialData } from '../mockData';
import IncomeChart from '../IncomeChart';

interface Props {
  financialData: FinancialData[];
}

const Column2: React.FC<Props> = ({ financialData }) => {
  const progressData = [
    {
      text: 'Sales of Product Income',
      financialTerm: '$200,000',
      percentage: 60,
    },
    { text: 'Fees Billed', financialTerm: '$100,000', percentage: 30 },
    { text: 'Design Income', financialTerm: '$50,000', percentage: 20 },
    { text: 'Other Income', financialTerm: '$15,000', percentage: 5 },
    { text: 'Billable Expense Income', financialTerm: '$0.5', percentage: 0.5 },
  ];

  return (
    <div className='p-3  flex flex-col'>
      {/* Left Column */}
      <div className='w-full  p-4'>
        <h2 className='text-lg font-semibold'>Your Business</h2>
        <p className='text-xs font-semibold text-gray-500 pt-2 flex items-center'>
          Income (2023)
          <FontAwesomeIcon icon={faInfoCircle} className='ml-1 text-sm' />
        </p>
        <p className='text-2xl font-bold mb-1 flex items-center'>
          $352,537
          <FontAwesomeIcon
            icon={faArrowUp}
            className='text-green-500 text-sm ml-2 transform rotate-45'
          />
          <b className='text-xs text-green-500 ml-1'>4.56%</b>
        </p>
        {/* Income Chart */}
        <IncomeChart financialData={financialData} />

        {/* Progress Bars */}
        <div className='pb-3 space-y-2'>
          {progressData.map((item, index) => (
            <div key={index} className='relative'>
              <p className='text-xs absolute px-3 left-0 z-10'>{item.text}</p>
              <p className='text-xs absolute px-3 right-0 z-10'>
                {item.financialTerm}
              </p>
              <div className='bg-gray-200 h-4 rounded-lg overflow-hidden relative mt-2'>
                <div
                  className='bg-green-300 h-full rounded-lg absolute top-0 left-0'
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className='flex justify-end'>
          <p className='text-sm font-semibold text-blue-600'>
            View all
            <FontAwesomeIcon icon={faArrowAltCircleRight} className='ml-1' />
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className='w-full  p-4'>
        <hr className='h-0.5 bg-slate-300 mb-4' />
        <p className='text-xs font-semibold text-gray-500 pt-2 flex items-center'>
          Assets (as of Sep 2023)
          <FontAwesomeIcon icon={faInfoCircle} className='ml-1 text-sm' />
        </p>
        <p className='text-2xl font-bold flex items-center'>
          $486,707
          <FontAwesomeIcon
            icon={faArrowUp}
            className='text-green-500 text-sm ml-2 transform rotate-45'
          />
          <b className='text-xs text-green-500 ml-1'>156%</b>
        </p>
        <p className='text-xs font-semibold text-gray-500 mb-3'>
          As of Sep 2022 <b className='text-red-500'>-$271,043</b>
        </p>

        {/* Assets Progress Bars */}
        {/*<div className='pb-3 space-y-2'>
          {progressData.map((item, index) => (
            <div key={index} className='mt-2'>
              <div className='bg-gray-200 h-4 rounded-lg overflow-hidden relative flex items-center justify-between px-3'>
                <p className='text-xs z-10'>{item.text}</p>
                <p className='text-xs z-10'>{item.financialTerm}</p>
                <div
                  className='bg-green-300 h-full absolute inset-0 rounded-lg z-5'
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>*/}
      </div>
    </div>
  );
};

export default Column2;
