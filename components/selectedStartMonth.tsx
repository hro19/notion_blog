import React, { useEffect, useState } from 'react';
import { generateAvailableMonths } from '@/utils/generateAvailableMonths';
import { useAtom } from 'jotai';
import { searchQueriesAtom } from '@/stores/searchQueriesAtoms';

const SelectedStartMonth = ({ allPosts }) => {
  const [availableMonths, setAvailableMonths] = useState<string[]>([]);
  const [searchQueries, setSearchQueries] = useAtom(searchQueriesAtom);

  useEffect(() => {
    const months = generateAvailableMonths(allPosts);
    months.sort((a, b) => a.localeCompare(b));
    setAvailableMonths(months);
    if (searchQueries.startMonth === undefined) {
      setSearchQueries((prev) => ({ ...prev, startMonth: null }));
    }
  }, [allPosts, setSearchQueries, searchQueries]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === '' ? null : e.target.value;
    setSearchQueries((prev) => ({ ...prev, startMonth: value }));
  };

  return (
    <div className='my-4 relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <div className='relative'>
        <select
          id='month-select'
          value={searchQueries.startMonth || ''}
          onChange={handleChange}
          className='block w-full px-4 py-2 pr-8 text-base border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none cursor-pointer'
        >
          <option value=''>開始月を選択してください</option>
          {availableMonths.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
          <svg
            className='h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
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
        </div>
      </div>
    </div>
  );
};

export default SelectedStartMonth;
