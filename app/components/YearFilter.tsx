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
      <DropdownMenu.Trigger className='px-2 py-1 border w-fit border-gray-300 bg-slate-100 rounded-md md:ml-20'>
        {selectedYear ? `Year: ${selectedYear}` : 'Year'}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className=' border border-gray-300 max-h-60  no-scrollbar bg-white z-50 w-24 rounded-md'>
        {years.map((year) => (
          <DropdownMenu.Item
            key={year}
            onClick={() => onSelectYear(year.toString())}
            className='cursor-pointer bg-gray-100 hover:bg-gray-200  border border-gray-200 p-2'
          >
            {year}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default YearFilter;
