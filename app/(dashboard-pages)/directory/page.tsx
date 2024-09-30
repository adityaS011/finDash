'use client';
import BouncingLoader from '@/app/components/Loaders/BouncingLoader';
import Pagination from '@/app/components/Pagination';
import React, { useState, useEffect } from 'react';

interface VendorData {
  name: string;
  category: string;
  email: string;
  phone: string;
}

const generateMockVendorData = () => {
  return Array.from({ length: 27 }, (_, i) => ({
    name: `Vendor ${i + 1}`,
    category: `Service Category ${Math.ceil((i + 1) / 3)}`,
    email: `vendor${i + 1}@serviceprovider.com`,
    phone: `+1-555-${Math.floor(1000000 + Math.random() * 9000000)}`,
  }));
};

const Directory: React.FC = () => {
  const [vendorData, setVendorData] = useState<VendorData[]>([]);

  // Use useEffect to generate data only on the client side
  useEffect(() => {
    const data = generateMockVendorData();
    setVendorData(data);
  }, []);

  const ROWS_PER_PAGE = 10; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(vendorData.length / ROWS_PER_PAGE);
  const currentData = vendorData.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Simulate data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <BouncingLoader />
      </div>
    );
  }
  return (
    <div className='px-4 md:px-12 pt-8 pb-10 w-full bg-gray-200 min-h-screen'>
      <h1 className='text-center text-3xl font-bold p-4 text-[#065f46]'>
        Directory
      </h1>

      <div className='overflow-x-auto shadow-lg rounded-lg'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Service Category
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Contact Email
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {currentData.map((vendor, index) => (
              <tr key={index} className='hover:bg-green-50'>
                <td className='px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-900'>
                  {vendor.name}
                </td>
                <td className='px-6 py-4 border-b border-gray-200 text-sm text-gray-600'>
                  {vendor.category}
                </td>
                <td className='px-6 py-4 border-b border-gray-200 text-sm text-gray-600'>
                  {vendor.email}
                </td>
                <td className='px-6 py-4 border-b border-gray-200 text-sm text-gray-600'>
                  {vendor.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Directory;
