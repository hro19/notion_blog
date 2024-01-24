import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Tab, Tabs, Button } from '@mui/material';

type Props = {
  allTags: string[];
};

const TopTab = ({ allTags }: Props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='my-3'>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='カテゴリー' className='font-bold' />
          <Tab label='よく見るページ' className='font-bold' />
        </Tabs>
        {value === 0 && (
          <Box>
            <div className='text-2xl'>
              {allTags.map((tag: string, index: number) => (
                <Link
                  href={`/tags/${tag}`}
                  key={index}
                  passHref
                  className='mr-1'
                >
                  <Button
                    key={tag}
                    variant='outlined'
                    color='primary'
                    className='mx-1 text-lx'
                  >
                    {tag}
                  </Button>
                </Link>
              ))}
            </div>
          </Box>
        )}
        {value === 1 && (
          <Box>
            <div>
              <a
                href='https://placehold.jp'
                target='_blank'
                className='text-blue-600 visited:text-purple-600 mx-2'
              >
                placeholder画像
              </a>
              <a
                href='https://placehold.jp'
                target='_blank'
                className='text-blue-600 visited:text-purple-600 mx-2'
              >
                縦横中央揃え
              </a>
            </div>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TopTab;
