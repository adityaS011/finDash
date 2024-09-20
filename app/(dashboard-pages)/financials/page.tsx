'use client';
import Pagination from '@/app/components/Pagination';
import TransactionCard from '@/app/components/TransactionCard';
import React, { useState, useEffect } from 'react';

type TransactionData = {
  date: string;
  description: string;
  amount: string;
  type: 'debit' | 'credit';
};

const generateMockTransactionData = (): TransactionData[] => {
  return Array.from({ length: 25 }, (_, i) => ({
    date: `2024-09-${String(i + 1).padStart(2, '0')}`,
    description: `Transaction ${i + 1}`,
    amount: `$${(Math.random() * 1000).toFixed(2)}`,
    type: i % 2 === 0 ? 'debit' : 'credit',
  }));
};

const FinancialPage: React.FC = () => {
  const [transactionData, setTransactionData] = useState<TransactionData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ROWS_PER_PAGE = 8;
  const totalPages = Math.ceil(transactionData.length / ROWS_PER_PAGE);

  useEffect(() => {
    const data: TransactionData[] = generateMockTransactionData();
    setTransactionData(data);
  }, []);

  const currentData = transactionData.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className='px-6 py-8 w-full bg-gray-200 min-h-screen'>
      <h1 className='text-center text-4xl font-bold mb-8 text-green-700'>
        Financial Overview
      </h1>

      {/* Summary Section */}
      <div className='flex flex-col md:flex-row gap-2 mb-8'>
        <div className='bg-white p-3 text-sm shadow-lg rounded-lg h-fit w-60'>
          <h2 className='text-xl font-semibold text-gray-800'>Total Balance</h2>
          <p className='text-xl font-bold text-green-600 '>$12,340.00</p>
        </div>

        <div className='bg-white p-3 text-sm shadow-lg rounded-lg h-fit w-60'>
          <h2 className='text-xl font-semibold text-gray-800'>GST Due</h2>
          <p className='text-xl font-bold text-red-600 '>$1,560.00</p>
        </div>

        <div className='bg-white p-3 text-sm shadow-lg rounded-lg h-fit w-60'>
          <h2 className='text-xl font-semibold text-gray-800'>
            Monthly Expense
          </h2>
          <p className='text-xl font-bold text-yellow-600 '>$4,200.00</p>
        </div>
      </div>

      {/* Transaction List */}
      <div className='bg-white p-8 shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold text-gray-800 mb-4'>
          Recent Transactions
        </h2>

        {/* Transaction Cards */}
        <div className='space-y-4'>
          {currentData.map((transaction, index) => (
            <TransactionCard key={index} transaction={transaction} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default FinancialPage;
