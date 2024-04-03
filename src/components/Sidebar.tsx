import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faHistory, faMoneyBillWave, faAddressBook, faHandHoldingUsd, faCog, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';


interface MenuItem {
  icon: IconDefinition;
  label: string;
}


const menuItems: MenuItem[] = [
  { icon: faHome, label: 'HeadsUp' },
  { icon: faHistory, label: 'Timelines' },
  { icon: faMoneyBillWave, label: 'Pay' },
  { icon: faAddressBook, label: 'Directory' },
  { icon: faHandHoldingUsd, label: 'Get Paid' },
  { icon: faHandHoldingUsd, label: 'Financials' },
  { icon: faHandHoldingUsd, label: 'Files' },
  { icon: faCog, label: 'Settings' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-200 text-gray-700 w-52 p-4 fixed top-0 left-0 h-full overflow-y-auto">
      
      <div className="rounded flex w-32 h-12 p-2 mt-2 mb-4">
        <img src={logo} alt="Fintech Logo" />
      </div>

      
      <ul className="space-y-2 pt-4 text-md px-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <FontAwesomeIcon icon={item.icon} className="mr-2" /> {item.label}
          </li>
        ))}
      </ul>

   
      <hr className='h-0.5 bg-slate-300' />

     
      <button className="bg-black text-white font-semibold p-2 m-4 rounded-l-full rounded-br-full absolute bottom-0 left-0">
        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" />
        Get Help
      </button>
    </div>
  );
};

export default Sidebar;
