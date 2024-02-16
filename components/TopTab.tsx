import React, { useState } from 'react';
import Link from 'next/link';
import { Box, Button, ButtonGroup } from '@yamada-ui/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {
  allTags: string[];
};

const TopTab = ({ allTags }: Props) => {
  return (
    <div className='my-3'>
      <Box sx={{ width: '100%' }}>
        <Tabs>
          <TabList className='border-b-blue-600 border-b mb-3'>
            <Tab>カテゴリー分け</Tab>
            <Tab>頻出検索ページ</Tab>
          </TabList>

          <TabPanel>
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
                      variant='outline'
                      colorScheme='link'
                      mx={'1px'}
                    >
                      {tag}
                    </Button>
                  </Link>
                ))}
              </div>
            </Box>
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </Tabs>
      </Box>
    </div>
  );
};

export default TopTab;
