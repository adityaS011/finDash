import type { Metadata } from 'next';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Finance Repo',
  description: 'Manage your finances',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Finance Repo</title>
        <meta name='description' content='Manage your finances' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className='flex flex-col md:flex-row h-full bg-gray-200 text-gray-800'>
        <div className='md:fixed md:w-52 z-50 border-r border-gray-300'>
          <Sidebar />
        </div>

        <div className='flex-grow md:ml-52 mt-6 md:mt-0 h-screen overflow-auto no-scrollbar'>
          {children}
        </div>
      </div>
    </>
  );
}
