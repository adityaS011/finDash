import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUp, faArrowDown, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import userImage from '../../../assets/user.png';
import { Account } from '../../mockdata';

interface Props {
  mainAccounts: Account[];
}

const Column1: React.FC<Props> = ({ mainAccounts }) => {
  const [expandedAccountId, setExpandedAccountId] = useState<number | null>(null);

  const toggleExpansion = (accountId: number) => {
    if (expandedAccountId === accountId) {
      setExpandedAccountId(null);
    } else {
      setExpandedAccountId(accountId);
    }
  };

  return (
    <div className="w-64 overflow-hidden">
      <div className='bg-white px-4 py-3 rounded-lg border-1  shadow-lg'>
        <h2 className="text-lg px-2 pt-2 font-semibold">Your Accounts</h2>
        <div className="flex flex-col ml-6 mt-2">
          {mainAccounts.map(mainAccount => (
            <div key={mainAccount.id}>
              <div className="flex justify-between items-center pl-10 mt-2">

                <img src={userImage} alt="User" className="w-10 ml-3 h-8 rounded-full absolute z-20 " style={{ marginLeft: '-2rem' }} />
                <img src={userImage} alt="User" className="w-10 ml-3 h-8 rounded-full absolute z-10" style={{ marginLeft: '-3rem' }} />
                <img src={userImage} alt="User" className="w-10 ml-3 h-8 rounded-full absolute z-10 " style={{ marginLeft: '-4rem' }} />
                

                <div className="pl-2 ml-14">
                  <p className="text-xs text-gray-500 flex cursor-pointer" onClick={() => toggleExpansion(mainAccount.id)}>Bank Balance
                    <FontAwesomeIcon icon={expandedAccountId === mainAccount.id ? faArrowUp : faAngleDown} className="text-gray-400 pt-1 pl-1 w-2" /></p>
                  <p className="text-2xl font-bold">${mainAccount.bankBalance.toLocaleString()}</p>
                </div>
              </div>
              {expandedAccountId === mainAccount.id && (
                <div className="flex flex-col  content-center justify-center item-center">

                  <div className="flex justify-between items-center  ">

                    
                    <p className="text-sm text-gray-700 flex">Credit Amount
                    </p>
                   
                    <div className="pl-2 mx-2 flex">
                    <FontAwesomeIcon icon={faArrowUp} className="text-green-500 pt-1 px-1 text-xl" />

                      <p className="text-xl">$500</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center  ">
                    <p className="text-sm text-gray-700 flex">Debit Amount
                    </p>
                   
                    <div className="pl-2 mx-2 flex">
                    <FontAwesomeIcon icon={faArrowDown} className="text-red-500 px-1 pt-1 text-xl" />
                      <p className="text-xl">$500</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='mt-6 text-xl bg-white px-4 py-3 rounded-lg border-1  shadow-lg font-semibold'>
        Assignment Tasks
        <div className="mt-6 flex items-center">
          <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
          <p className="text-sm">Menu/SideBar</p>
        </div>
        <div className="mt-3 flex items-center">
          <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
          <p className="text-sm">Account/Buissness Section</p>
        </div>
        <div className="mt-3 flex items-center">
          <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
          <p className="text-sm">Graph</p>
        </div>
        <div className="mt-3 flex items-center">
          <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
          <p className="text-sm">Graph Hover</p>
        </div>
        <div className="mt-3 flex items-center">
          <FontAwesomeIcon icon={faCheckSquare} className="text-green-400 mr-2" />
          <p className="text-sm">Dropdown on Account</p>
        </div>
      </div>
    </div>
  );
};

export default Column1;
