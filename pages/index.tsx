import { GetStaticProps } from 'next';

import { getAllPosts } from '../lib/notionAPI';
import TopPost from '../components/TopPost';

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      allPosts,
    },
    revalidate: 10,
  };
};

export default function Home({ allPosts }: any) {
  // console.log(allPosts);
  return (
    <>
      <main className='container mx-auto py-4'>
        <div className='px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
          {allPosts.map((card: any) => (
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
      </main>
    </>
  );
}
