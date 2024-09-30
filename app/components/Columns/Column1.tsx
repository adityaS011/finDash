'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faCheckSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Account } from '../mockData';
import Image from 'next/image';

interface Props {
  mainAccounts: Account[];
}

const Column1: React.FC<Props> = ({ mainAccounts }) => {
  const [expandedAccountId, setExpandedAccountId] = useState<number | null>(
    null
  );
  const [tasks, setTasks] = useState({
    menuSidebar: true,
    businessSection: true,
    graph: true,
    graphHover: true,
    dropdownAccount: false,
  });
  // Handle checkbox toggle
  const toggleTask = (taskName: keyof typeof tasks) => {
    setTasks((prevState) => ({
      ...prevState,
      [taskName]: !prevState[taskName],
    }));
  };
  const toggleExpansion = (accountId: number) => {
    if (expandedAccountId === accountId) {
      setExpandedAccountId(null);
    } else {
      setExpandedAccountId(accountId);
    }
  };

  return (
    <div className='w-full gap-4 px-3  flex flex-col  md:w-fit'>
      <div className='bg-white px-4 py-3 rounded-lg border-1 h-fit w-full  md:w-56 shadow-lg'>
        <h2 className='text-lg px-2 pt-2 font-semibold '>Your Accounts</h2>
        <div className='flex flex-col py-3  md:mt-2 w-full md:w-fit '>
          {mainAccounts.map((mainAccount) => (
            <div key={mainAccount.id}>
              <div className='flex flex-row gap-0  md:px-2 justify-evenly'>
                <div className='flex flex-row'>
                  <Image
                    src={'/user.png'}
                    alt='User'
                    width={100}
                    height={100}
                    className='w-fit h-12 md:h-8 p-0 rounded-full '
                  />
                  <Image
                    src={'/user.png'}
                    alt='User'
                    width={100}
                    height={100}
                    className='w-fit p-0 -ml-7 h-12 md:h-8 rounded-full '
                  />
                  <Image
                    src={'/user.png'}
                    alt='User'
                    width={100}
                    height={100}
                    className='w-fit p-0 -ml-7 h-12 md:h-8 rounded-full  '
                  />
                </div>
                <div className='md:pl-4 '>
                  <p
                    className='text-xs text-gray-500 flex flex-row items-center cursor-pointer'
                    onClick={() => toggleExpansion(mainAccount.id)}
                  >
                    Bank Balance
                    <FontAwesomeIcon
                      icon={
                        expandedAccountId === mainAccount.id
                          ? faArrowUp
                          : faAngleDown
                      }
                      className='text-gray-400 pl-1 w-2'
                    />
                  </p>
                  <p className='text-2xl font-bold'>
                    ${mainAccount.bankBalance.toLocaleString()}
                  </p>
                </div>
              </div>
              {expandedAccountId === mainAccount.id && (
                <div className='flex flex-col'>
                  <div className='flex flex-row w-full items-center justify-between gap-2'>
                    <p className='text-xs text-gray-700 '>Credit Amount</p>

                    <div className='flex'>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className='text-green-500 pt-1 px-1 text-xl'
                      />

                      <p className='text-xl'>$500</p>
                    </div>
                  </div>
                  <div className='flex flex-row w-full items-center justify-between gap-2'>
                    <p className='text-xs text-gray-700 '>Debit Amount</p>

                    <div className='flex'>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className='text-red-500 px-1 pt-1 text-xl'
                      />

                      <p className='text-xl'>$500</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='md:text-xl text-base bg-white px-4 py-3 rounded-lg border-1 shadow-lg font-semibold'>
        Pending Tasks
        <div
          className='mt-6 flex items-center cursor-pointer'
          onClick={() => toggleTask('menuSidebar')}
        >
          <FontAwesomeIcon
            icon={tasks.menuSidebar ? faCheckSquare : faSquare}
            className={`mr-2 ${
              tasks.menuSidebar ? 'text-green-500' : 'text-gray-300'
            }`}
          />
          <p className='text-sm'>Reimburstments</p>
        </div>
        <div
          className='mt-3 flex items-center cursor-pointer'
          onClick={() => toggleTask('businessSection')}
        >
          <FontAwesomeIcon
            icon={tasks.businessSection ? faCheckSquare : faSquare}
            className={`mr-2 ${
              tasks.businessSection ? 'text-green-500' : 'text-gray-300'
            }`}
          />
          <p className='text-sm'>GSTIN Filing</p>
        </div>
        <div
          className='mt-3 flex items-center cursor-pointer'
          onClick={() => toggleTask('graph')}
        >
          <FontAwesomeIcon
            icon={tasks.graph ? faCheckSquare : faSquare}
            className={`mr-2 ${
              tasks.graph ? 'text-green-500' : 'text-gray-300'
            }`}
          />
          <p className='text-sm'>Office Rent</p>
        </div>
        <div
          className='mt-3 flex items-center cursor-pointer'
          onClick={() => toggleTask('graphHover')}
        >
          <FontAwesomeIcon
            icon={tasks.graphHover ? faCheckSquare : faSquare}
            className={`mr-2 ${
              tasks.graphHover ? 'text-green-500' : 'text-gray-300'
            }`}
          />
          <p className='text-sm'>Testing Dept. Salaries</p>
        </div>
        <div
          className='mt-3 flex items-center cursor-pointer'
          onClick={() => toggleTask('dropdownAccount')}
        >
          <FontAwesomeIcon
            icon={tasks.dropdownAccount ? faCheckSquare : faSquare}
            className={`mr-2 ${
              tasks.dropdownAccount ? 'text-green-500' : 'text-gray-300'
            }`}
          />
          <p className='text-sm'>Clound Bills</p>
        </div>
      </div>
    </div>
  );
};

export default Column1;
