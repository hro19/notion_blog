import React from 'react';
import { GetStaticProps } from 'next';
import { getAllPosts, getSinglePost } from '@/lib/notionAPI';

//https:zenn.dev/yumiyoshi/scraps/f6220f26263103
//getStaticPathsはサーバーサイドでビルド時にレンダリングする必要のあるパスのリストを生成する
export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    // paths: [
    //   { params: { slug: 'first-post' } },
    //   { params: { slug: 'second-post' } },
    //   { params: { slug: 'third-post' } },
    // ],
    fallback: 'blocking',
  };
};

//https:zenn.dev/yumiyoshi/scraps/f6220f26263103
//getStaticPropsはビルド時に静的なファイルを生成し、ページコンポーネントで使用する値を用意する
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getSinglePost(params.slug);
  // console.log(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 6,
  };
};

const Post = ({ post }: any) => {
  console.log(post);
  return (
    <div className='container mx-auto my-2 sm:my-4'>
      <h2 className='text-2xl font-medium'>{post.title}</h2>
      <i className='border-b-2 w-1/3 mt-1 border-sky-900'></i>
      <span className='text-gray-500'>投稿日：{post.date}</span>
      <br />
      {post.tags.map((tag: string, index: number) => (
        <p
          key={index}
          className='text-white bg-sky-900 rounded-xl font-medium mt-2 px-2 inline-block mr-1'
        >
          {tag}
        </p>
      ))}
      <div className='mt-10 font-medium'>
        文章コンテンツコンテンツコンテンツ コンテンツ コンテンツ コンテンツ
      </div>
    </div>
  );
};

export default Post;
