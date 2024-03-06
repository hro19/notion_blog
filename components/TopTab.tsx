import React from 'react';
import Link from 'next/link';
import { Box, Button } from '@yamada-ui/react';
import { Tabs, Tab, TabPanel } from "@yamada-ui/react"

type Props = {
  allTags: string[];
};

const TopTab = ({ allTags }: Props) => {
  return (
    <div className='my-3'>
      <Box sx={{ width: '100%' }}>
        <Tabs size="md">
          <Tab>カテゴリー分け</Tab>
          <Tab>頻出検索ページ</Tab>
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
                      mb={1}
                      fontWeight={"light"}
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
              <div className="[&>a]:text-blue-600 [&>a:visited]:text-purple-600 [&>a:hover]:opacity-75 [&>a:hover]:duration-700 [&>a]:mx-2">
                <a
                  href='https://placehold.jp'
                  target='_blank'
                >
                  placeholder画像
                </a>
                <a
                  href='https://placehold.jp'
                  target='_blank'
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
