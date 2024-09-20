import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <div className='flex justify-between items-center mt-4 px-4'>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-green-600'
        }`}
      >
        Previous
      </button>

      <span className='text-gray-700'>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`bg-green-500 text-white font-semibold py-2 px-4 rounded-lg ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-green-600'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
