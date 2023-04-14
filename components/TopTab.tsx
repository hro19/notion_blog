import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

const TopTab = () => {
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
          <Tab label='Tab 3' />
        </Tabs>
        {value === 0 && <Box>Tab 1 content</Box>}
        {value === 1 && <Box>Tab 2 content</Box>}
        {value === 2 && <Box>Tab 3 content</Box>}
      </Box>
    </>
  );
};

export default TopTab;
