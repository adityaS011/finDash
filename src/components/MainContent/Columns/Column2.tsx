import React from 'react';
import IncomeChart from '../Charts/IncomeChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faInfoCircle, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FinancialData } from '../../mockdata';

interface Props {
  financialData: FinancialData[]; 
}

const Column2: React.FC<Props> = ({ financialData }) => {
  const progressData = [
    { text: 'Sales of Product Income', financialTerm: '$200,000', percentage: 60 },
    { text: 'Fees Billed', financialTerm: '$100,000', percentage: 30 },
    { text: 'Design Income', financialTerm: '$50,000', percentage: 20 },
    { text: 'Other Income', financialTerm: '$15,000', percentage: 5 },
    { text: 'Billable Expense Income', financialTerm: '$0.5', percentage: 0.5 }
  ];

  return (
    <div className="p-3 bg-white   ">
      <div className='w-[16rem] z-10 px-4 pt-3'>
        <h2 className="text-lg font-semibold">Your Business</h2>
        <p className="text-xs font-semibold text-gray-500 pt-2">Income (2023) <FontAwesomeIcon icon={faInfoCircle} className='text-sm' /></p>
        <p className="text-2xl font-bold mb-1">$352,537 <FontAwesomeIcon icon={faArrowUp} className="text-green-500 text-sm transform rotate-45" />
          <b className='text-xs text-green-500 mb-0'> 4.56%</b>
        </p>
        <IncomeChart financialData={financialData} />
        <div className="pb-3">
          {/* Render progress bars */}
          {progressData.map((item, index) => (
            <div key={index} className="pb-1 relative">
              <p className="text-xs absolute px-3  left-0 z-10">{item.text}</p>
              <p className="text-xs absolute px-3   right-0 z-10">{item.financialTerm}</p>
              <div className="bg-white h-5  w-full  overflow-hidden relative">
                <div className={`bg-green-300 h-full  absolute top-0 left-0 z-0`} style={{ width: `${item.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <p className="text-sm">View all <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-1" /></p>
        </div>
      </div>
      
            <div className='p-3'>
            <hr className='h-0.3 bg-slate-300' />
            <p className="text-xs font-semibold text-gray-500 pt-2">Assets (as of Sep 2023) <FontAwesomeIcon icon={faInfoCircle} className='text-sm' /></p>
        <p className="text-2xl font-bold ">$486,707 <FontAwesomeIcon icon={faArrowUp} className="text-green-500 text-sm transform rotate-45" />
          <b className='text-xs text-green-500 '> 156%</b>
        </p>
        <p className="text-xs font-semibold text-gray-500 mb-3 ">As of Sep 2022 <b>-$271,043</b></p>
        
        <div className="pb-3">
          {progressData.map((item, index) => (
            <div key={index} className="pb-1 relative">
              <p className="text-xs absolute px-3  left-0 z-10">{item.text}</p>
              <p className="text-xs absolute px-3   right-0 z-10">{item.financialTerm}</p>
              <div className="bg-white h-5  w-full  overflow-hidden relative">
                
              </div>
            </div>
          ))}
        </div>
            </div>
    </div>
  );
};

export default Column2;
