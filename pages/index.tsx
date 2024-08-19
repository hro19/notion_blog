/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import { getAllPosts, getAllTags } from '../lib/notionAPI';
import SeoHead from '../components/SeoHead';
import TopPost from '../components/TopPost';
import TopTab from '../components/TopTab';
import { Post, PostsProps } from '../ts/Blog';
import SelectedStartMonth from '@/components/selectedStartMonth';
import { useAtom } from 'jotai';
import { resultPostsAtom } from '@/stores/postsAtoms';
import { searchQueriesAtom } from '@/stores/searchQueriesAtoms';

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const allPosts = await getAllPosts();
  const allTags = await getAllTags();

  return {
    props: {
      allPosts,
      allTags,
    },
    revalidate: 10,
  };
};

export default function Home({ allPosts, allTags }: PostsProps) {
  const [resultPosts, setResultPosts] = useAtom(resultPostsAtom);
  const [searchQueries] = useAtom(searchQueriesAtom);

  useEffect(() => {
    if (searchQueries.startMonth === null) {
      setResultPosts(allPosts);
      return;
    }

    const filteredPosts = allPosts.filter((post: Post) => {
      const postMonth = post.date.substring(0, 7);
      return postMonth === searchQueries.startMonth;
    });
    setResultPosts(filteredPosts);
  }, [allPosts, searchQueries.startMonth, setResultPosts]);

  return (
    <>
      <SeoHead
        title={'Home'}
        titleTemplate={'Hor_Web_Blog'}
        description={'Web技術ブログ by Notion&Next.js'}
      />
      <main className='container mx-auto py-4'>
        <div className='px-4 sm:px-6 lg:px-8'>
          <TopTab allTags={allTags} />
          <SelectedStartMonth allPosts={allPosts} />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            {resultPosts &&
              resultPosts.map((card: Post) => (
                <TopPost
                  id={card.id}
                  title={card.title}
                  date={card.date}
                  tags={card.tags}
                  slug={card.slug}
                  thumbnail={card.thumbnail}
                  key={card.id}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}
