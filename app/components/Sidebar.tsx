'use client';
import { usePathname, useRouter } from 'next/navigation'; // Import usePathname and useRouter
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {
  faHome,
  faHistory,
  faMoneyBillWave,
  faAddressBook,
  faHandHoldingUsd,
  faCog,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState } from 'react';

interface MenuItem {
  icon: IconDefinition;
  label: string;
  route: string;
}

const menuItems: MenuItem[] = [
  { icon: faHome, label: 'Home', route: '/' },
  { icon: faHistory, label: 'Timelines', route: '/timelines' },
  { icon: faMoneyBillWave, label: 'Payments', route: '/payments' },
  { icon: faAddressBook, label: 'Directory', route: '/directory' },
  { icon: faHandHoldingUsd, label: 'Financials', route: '/financials' },
  { icon: faCog, label: 'Settings', route: '/settings' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter(); // Using the new useRouter from next/navigation
  const pathname = usePathname(); // Get the current route path

  const handleNavigation = (route: string) => {
    router.push(route); // Navigate to the specified route
  };

  const getTextColor = (route: string) => {
    // Check if the current route matches the menu item or if no route is specified, highlight 'Home'
    return pathname === route || (pathname === '/' && route === '/')
      ? 'text-green-500'
      : 'text-gray-700';
  };

  return (
    <>
      {/* Top Navbar for mobile */}
      <div className='md:hidden z-100 fixed top-0 left-0 right-0 border-b border-l  shadow-md bg-gray-200 text-gray-700 flex justify-between items-center p-4 z-40'>
        <Image src={'/logo.png'} alt='Fintech Logo' width={100} height={100} />
        {/*<button
          onClick={toggleSidebar}
          className='text-gray-700 focus:outline-none'
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faRectangleXmark} size='lg' />
          ) : (
            <FontAwesomeIcon icon={faBars} size='lg' />
          )}
        </button>*/}
      </div>

      {/* Sidebar for larger screens */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform fixed md:relative top-0 left-0 h-screen overflow-hidden bg-gray-200 text-gray-700 w-52 p-4 z-40`}
      >
        <div className='rounded flex w-32 h-12 p-2 mt-2 mb-4'>
          <Image
            src={'/logo.png'}
            alt='Fintech Logo'
            width={100}
            height={100}
          />
        </div>

        <ul className='space-y-2 pt-4 text-md px-2'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`py-2 cursor-pointer ${getTextColor(item.route)}`} // Apply dynamic color
              onClick={() => handleNavigation(item.route)}
            >
              <span className='icon-wrapper'>
                <FontAwesomeIcon icon={item.icon} className='mr-2' />{' '}
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <hr className='h-0.5 bg-slate-300' />

        <button className='bg-black text-white font-semibold p-2 m-4 rounded-l-full rounded-br-full absolute bottom-0 left-0'>
          <FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />
          Get Help
        </button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-30 md:hidden'
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Bottom Navbar for mobile (icon-only) */}
      <div className='fixed bottom-0 z-50 left-0 right-0 bg-gray-200 flex justify-around items-center p-2 md:hidden'>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`text-gray-700 ${getTextColor(item.route)}`} // Apply dynamic color for mobile
            onClick={() => handleNavigation(item.route)}
          >
            <FontAwesomeIcon icon={item.icon} size='lg' />
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
