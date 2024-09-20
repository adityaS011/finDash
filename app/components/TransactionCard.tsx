import React from 'react';

interface TransactionCardProps {
  transaction: {
    date: string;
    description: string;
    amount: string;
    type: 'debit' | 'credit';
  };
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const { date, description, amount, type } = transaction;

  return (
    <div
      className={`flex justify-between items-center border p-4 rounded-lg shadow-sm ${
        type === 'debit' ? 'bg-red-50' : 'bg-green-50'
      }`}
    >
      <div>
        <p className='text-gray-800 font-semibold'>{description}</p>
        <p className='text-gray-500 text-sm'>{date}</p>
      </div>

      <p
        className={`text-lg font-bold ${
          type === 'debit' ? 'text-red-600' : 'text-green-600'
        }`}
      >
        {amount}
      </p>
    </div>
  );
};

export default TransactionCard;
