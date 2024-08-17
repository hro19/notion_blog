import React, { useEffect, useState } from 'react';
import { Post, PostsProps } from '../ts/Blog';
import { Select } from '@yamada-ui/react';

const SelectMouth = ({ allPosts }) => {
  const [availableMonths, setAvailableMonths] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>('');

  useEffect(() => {
    const generateAvailableMonths = () => {
      const monthSet = new Set<string>();
      allPosts.forEach((post: Post) => {
        const date = new Date(post.date);
        const monthString = date.toLocaleString('ja-JP', {
          year: 'numeric',
          month: '2-digit',
        });
        monthSet.add(monthString);
      });

      return Array.from(monthSet).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime()
      );
    };

    const months = generateAvailableMonths();
    setAvailableMonths(months);
    setSelectedMonth(months[0] || ''); // 最新の月を初期選択
  }, [allPosts]);

  return (
    <div className='my-4 relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <label
        htmlFor='month-select'
        className='block text-sm font-medium text-gray-700 mb-1'
      >
        月を選択
      </label>
      <select
        id='month-select'
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className='block w-full px-4 py-2 pr-8 text-base border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none'
      >
        {availableMonths.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <div
        className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'
        style={{ top: '24px' }}
      >
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
  );
};

export default SelectMouth;
