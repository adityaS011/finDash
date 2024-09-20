import type { Metadata } from 'next';
import Sidebar from '../components/Sidebar';

export const metadata: Metadata = {
  title: 'Fin Dashboard',
  description: 'Automation for your growing business',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex flex-col md:flex-row h-full bg-gray-200 text-gray-800'>
        {/* Sidebar, fixed to the left */}
        <div className='fixed w-fit z-50 border-l border border-gray-300'>
          <Sidebar />
        </div>
        <hr className='h-0.5 bg-slate-300' />

        {/* Main content area */}
        <div className='flex-grow md:ml-52 mt-6 md:mt-0 h-screen overflow-auto no-scrollbar'>
          {children} {/* This will render the content of each page */}
        </div>
      </div>
    </>
  );
}
