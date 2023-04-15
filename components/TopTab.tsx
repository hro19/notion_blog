import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

type Props = {
  allTags: string[];
};

const TopTab = ({ allTags }: Props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Tab 1' />
          <Tab label='Tab 2' />
        </Tabs>
        {value === 0 && (
          <Box>
            {' '}
            <div className='text-2xl'>
              <ul>
                {allTags.map((tag: string) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </Box>
        )}
        {value === 1 && (
          <Box>
            <div>
              <h2>こんちわ。</h2>
              <p>プロテクトプロテクト</p>
            </div>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TopTab;
