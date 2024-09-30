import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

interface YearFilterProps {
  selectedYear: string;
  onSelectYear: (year: string) => void;
  years: number[];
}

const YearFilter: React.FC<YearFilterProps> = ({
  selectedYear,
  onSelectYear,
  years,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='flex items-center px-2 py-1 border w-fit border-gray-300 bg-white rounded-md md:ml-20'>
        <span>{selectedYear ? `Year: ${selectedYear}` : 'Year'}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='ml-2 w-4 h-4'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className=' border border-gray-300 max-h-60  no-scrollbar bg-white z-50 w-28 rounded-lg text-center'>
        {years.map((year) => (
          <DropdownMenu.Item
            key={year}
            onClick={() => onSelectYear(year.toString())}
            className='cursor-pointer bg-white hover:bg-gray-200  border border-gray-200 p-2 '
          >
            {year}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default YearFilter;
