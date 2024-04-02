// Sidebar.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faMoneyBillWave, faAddressBook, faHandHoldingUsd, faCog, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-200 text-gray-700 w-52 p-4 fixed top-0 left-0 h-full overflow-y-auto">
      
      <div className="rounded flex w-32 h-12 p-2 mt-2 mb-4">
        <img src={logo} alt="Fintech Logo" />
      </div>

      <ul className="space-y-2 pt-4 text-md px-2">
        <li>
          <FontAwesomeIcon icon={faHome} className="mr-2" /> HeadsUp
        </li>
        <li>
          <FontAwesomeIcon icon={faHistory} className="mr-2 pt-4" /> Timelines
        </li>
        <li>
          <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2 pt-4" /> Pay
        </li>
        <li>
          <FontAwesomeIcon icon={faAddressBook} className="mr-2 pt-4" /> Directory
        </li>
        <li>
          <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-2 pt-4" /> Get Paid
        </li>
        <hr className='h-0.5 bg-slate-300' />
        <li>
          <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-2 pt-3" /> Financials
        </li>
        <li>
          <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-2 pt-4" /> Files
        </li>
        
        <li>
          <FontAwesomeIcon icon={faCog} className="mr-2 pt-3" /> Settings
        </li>
        <hr />
      </ul>

      {/* Get Help button */}
      <button className="bg-black text-white font-semibold p-2 m-4 rounded-l-full rounded-br-full absolute bottom-0 left-0">
        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
        Get Help
      </button>
    </div>
  );
};

export default Sidebar;
