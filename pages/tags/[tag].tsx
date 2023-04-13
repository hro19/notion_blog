import { GetStaticPaths, GetStaticProps } from 'next';

import { getPostsByTag, getAllTags } from '../../lib/notionAPI';
import TopPost from '../../components/TopPost';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getAllTags()).map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });
  //console.log(paths);

  //let params = [{ params: { tag: 'tailwind' } }, { params: { tag: 'css' } }];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const currentTag: string | undefined = context.params?.tag?.toString();

  const allPostsByTag = await getPostsByTag(currentTag);

  return {
    props: {
      allPostsByTag,
    },
    revalidate: 10,
  };
};

export default function PostsByTag({ allPostsByTag }: any) {
  // console.log(allPostsByTag);
  return (
    <>
      <main className='container mx-auto py-4'>
        <div className='px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6'>
          {allPostsByTag.map((card: any) => (
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
