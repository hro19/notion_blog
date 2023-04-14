import { GetStaticProps } from 'next';
import { getAllPosts, getAllTags } from '../lib/notionAPI';
import TopPost from '../components/TopPost';
import TopTab from '../components/TopTab';

type Post = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  slug: string;
  thumbnail: string;
};

type Props = {
  allPosts: Post[];
  allTags: string[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
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

export default function Home({ allPosts, allTags }: Props) {
  return (
    <>
      <main className='container mx-auto py-4'>
        <div className='px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
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
        <TopTab allTags={allTags} />
      </main>
    </>
  );
}
