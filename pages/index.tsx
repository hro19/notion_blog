import { GetStaticProps } from 'next';
import { getAllPosts, getAllTags } from '../lib/notionAPI';
import SeoHead from '../components/SeoHead';
import TopPost from '../components/TopPost';
import TopTab from '../components/TopTab';
import { Post, PostsProps } from '../ts/Blog';

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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
            {allPosts.map((card: Post) => (
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
