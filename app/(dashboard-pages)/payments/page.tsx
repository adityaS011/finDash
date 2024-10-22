'use client';
import BouncingLoader from '@/app/components/Loaders/BouncingLoader';
import Pagination from '@/app/components/Pagination';
import React, { useState, useEffect } from 'react';

interface ExpenseData {
  name: string;
  category: string;
  pendingAmount: string;
}

const generateMockData = () => {
  return Array.from({ length: 27 }, (_, i) => ({
    name: `Person ${i + 1}`,
    category: `Category ${Math.ceil((i + 1) / 3)}`,
    pendingAmount: `$${(Math.random() * 1000 + 50).toFixed(2)}`,
  }));
};

const Payment: React.FC = () => {
  const [mockExpenseData, setMockExpenseData] = useState<ExpenseData[]>([]);
  const [loading, setLoading] = useState(true);

  // Use useEffect to generate data only on the client side
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const data = generateMockData();
    setMockExpenseData(data);
  }, []);

  const ROWS_PER_PAGE = 10; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockExpenseData.length / ROWS_PER_PAGE);
  const currentData = mockExpenseData.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <BouncingLoader />
      </div>
    );
  }
  return (
    <div className=' px-4 md:px-12 pt-8 pb-10 w-full bg-gray-200 min-h-screen'>
      <h1 className='text-center text-3xl font-bold p-4 text-[#065f46]'>
        Payments
      </h1>

      <div className='overflow-x-auto shadow-lg rounded-lg'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Expense Category
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Pending Amount
              </th>
              <th className='px-6 py-3 border-b-2 border-gray-200 bg-green-600 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='bg-white'>
            {currentData.map((item, index) => (
              <tr key={index} className='hover:bg-green-50'>
                <td className='px-6 py-4 border-b border-gray-200 text-sm font-medium text-gray-900'>
                  {item.name}
                </td>
                <td className='px-6 py-4 border-b border-gray-200 text-sm text-gray-600'>
                  {item.category}
                </td>
                <td className='px-6 py-4 border-b border-gray-200 text-sm text-gray-600'>
                  {item.pendingAmount}
                </td>
                <td className='px-6 py-4 border-b border-gray-200 text-sm'>
                  <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg'>
                    Payment
                  </button>
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

export default Payment;
