'use client';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import { ReactNode, useState } from 'react';
import {
  CircleExclamationIcon,
  ContactIcon,
  FinanceIcon,
  HomeIcon,
  LogoIcon,
  PaymentsIcon,
  SettingIcon,
  TimelineIcon,
} from '../icons';

interface MenuItem {
  icon: ReactNode;
  label: string;
  route: string;
}

const menuItems: MenuItem[] = [
  { icon: <HomeIcon className='w-fit mr-1 h-5' />, label: 'Home', route: '/' },
  {
    icon: <TimelineIcon className='w-fit  h-6' />,
    label: 'Timelines',
    route: '/timelines',
  },
  {
    icon: <PaymentsIcon className='w-fit  h-6' />,
    label: 'Payments',
    route: '/payments',
  },
  {
    icon: <ContactIcon className='w-fit  h-6' />,
    label: 'Directory',
    route: '/directory',
  },
  {
    icon: <FinanceIcon className='w-fit  h-6' />,
    label: 'Financials',
    route: '/financials',
  },
  {
    icon: <SettingIcon className='w-fit mr-1 h-5' />,
    label: 'Settings',
    route: '/settings',
  },
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
      <div className='md:hidden z-100 fixed top-0 left-0 right-0 border-b border-l  shadow-md bg-[#ecfae5] text-gray-700 flex justify-between items-center p-4 z-40'>
        <LogoIcon className='w-7 h-7 rounded-full' />{' '}
        <p className=' text-gray-600 font-sans tracking-wide uppercase text-lg font-semibold '>
          Finance Repo
        </p>
      </div>

      {/* Sidebar for larger screens */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform fixed md:relative top-1 left-0 h-screen overflow-hidden bg-gray-200 text-gray-700 w-52 px-4 py-2 z-40`}
      >
        <div className='rounded-3xl border border-[#efeaea] shadow bg-[#ecfae5] flex w-40 h-12 p-2 mt-2 mb-4 gap-2 hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer'>
          <LogoIcon className='w-7 h-7 rounded-full' />
          <p className=' text-gray-600 font-sans tracking-tight text-lg font-semibold '>
            Finance Repo
          </p>
        </div>

        <ul className='space-y-2 pt-4 text-md px-2'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`py-1 rounded-lg hover:text-white hover:opacity-95 hover:bg-[#60c689] cursor-pointer ${getTextColor(
                item.route
              )}`}
              onClick={() => handleNavigation(item.route)}
            >
              <div className='flex flex-row gap-2 p-2 items-center max-w-24 w-fit'>
                <p className=' w-fit'>{item.icon}</p>
                <p className='text-lg tracking-wide font-sans'>{item.label}</p>
              </div>
            </li>
          ))}
        </ul>

        <hr className='h-0.5 bg-slate-300' />

        <button className='flex flex-row  gap-2 items-center hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer bg-black text-white font-semibold p-2 m-4 rounded-l-full rounded-br-full absolute bottom-0 left-0'>
          <CircleExclamationIcon className='w-5 h-5' /> <p>Get Help</p>
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
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
