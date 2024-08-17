import React from 'react';
import Link from 'next/link';
import { Box, Button } from '@yamada-ui/react';
import { Tabs, Tab, TabPanel } from '@yamada-ui/react';

type Props = {
  allTags: string[];
};

const TopTab = ({ allTags }: Props) => {
  return (
    <Box className='my-3'>
      <Box sx={{ width: '100%' }}>
        <Tabs size='sm'>
          <Tab>カテゴリー分け</Tab>
          <Tab>頻出検索ページ</Tab>
          <TabPanel className=' mt-2'>
            <Box>
              <Box className='text-2xl'>
                {allTags.map((tag: string, index: number) => (
                  <Link
                    href={`/tags/${tag}`}
                    key={index}
                    passHref
                    className='inline-block px-3 py-1 mr-1 mb-1 text-lg rounded-xl border text-indigo-600 border-indigo-300 hover:bg-indigo-500 hover:text-white'
                  >
                    {tag}
                  </Link>
                ))}
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Box className='[&>a]:text-blue-600 [&>a:visited]:text-purple-600 [&>a:hover]:opacity-75 [&>a:hover]:duration-700 [&>a]:mx-2'>
                <a href='https://placehold.jp' target='_blank'>
                  placeholder画像
                </a>
                <a href='https://placehold.jp' target='_blank'>
                  縦横中央揃え
                </a>
              </Box>
            </Box>
          </TabPanel>
        </Tabs>
      </Box>
    </Box>
  );
};

export default TopTab;
