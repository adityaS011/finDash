'use client';
import YearFilter from '@/app/components/YearFilter';
import React, { useState } from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const mockTimelineData: TimelineEvent[] = [
  {
    date: '2024-01-01',
    title: 'Project Kickoff',
    description: 'Initial planning and team setup.',
  },
  {
    date: '2024-02-15',
    title: 'Design Finalized',
    description: 'UI/UX designs completed.',
  },
  {
    date: '2024-03-10',
    title: 'Development Started',
    description: 'Coding phase begins for core features.',
  },
  {
    date: '2024-05-01',
    title: 'MVP Launch',
    description: 'First version of the product released.',
  },
  {
    date: '2023-01-01',
    title: 'Finance evalutaion',
    description: 'Initial planning and team setup.',
  },
  {
    date: '2023-02-15',
    title: 'UI/UX Designing',
    description: 'UI/UX designs completed.',
  },
  {
    date: '2023-03-10',
    title: 'Development Started',
    description: 'Coding phase begins for core features.',
  },
  {
    date: '2023-05-01',
    title: 'MVP Launch',
    description: 'First version of the product released.',
  },
  {
    date: '2022-05-01',
    title: 'MVP Launch',
    description: 'First version of the product released.',
  },
  {
    date: '2021-05-01',
    title: 'MVP Launch',
    description: 'First version of the product released.',
  },
];
const years = Array.from(
  new Set(mockTimelineData.map((event) => new Date(event.date).getFullYear()))
);

const Timelines: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>(years[0].toString());

  // Filter events based on selected year
  const filteredEvents = mockTimelineData.filter((event) =>
    event.date.startsWith(selectedYear)
  );
  return (
    <div className='flex flex-col px-4 md:px-12 pt-8 pb-10 w-full bg-gray-200 min-h-screen'>
      <h1 className='text-center text-3xl font-bold p-4 text-[#4b0034]'>
        Project Timeline
      </h1>
      <YearFilter
        years={years}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
      />
      <div className='relative mt-12 flex flex-col md:px-20'>
        {/* Timeline Line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300'></div>

        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            } justify-center  mb-12`}
          >
            {/* Event Bubble (Center Circle) */}
            <div className='w-8 h-8 rounded-full bg-[#209f59] absolute left-1/2 transform -translate-x-1/2 z-10'></div>

            {/* Event Box (Left or Right side) */}
            <div
              className={`w-[40%] p-6 rounded-lg shadow-xl ${
                index % 2 === 0
                  ? 'bg-gradient-to-r from-[#6d28d9] to-[#9d4edd] mr-auto'
                  : 'bg-gradient-to-r from-[#d946ef] to-[#f43f5e] ml-auto'
              }`}
            >
              <h2 className='text-lg font-bold text-white'>{event.title}</h2>
              <p className='mt-2 text-white'>{event.description}</p>
            </div>

            {/* Date (Opposite side of event box) */}
            <div
              className={`w-32 text-center ${
                index % 2 === 0 ? 'mr-auto' : 'ml-auto'
              }`}
            >
              <span className='block text-lg font-semibold text-[#4b0034]'>
                {event.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timelines;
