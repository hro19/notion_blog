import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: number;
  title: string;
  date: string;
  tags: string[];
  slug: string;
  thumbnail: string;
};

const TopPost = (props: Props) => {
  const { id, title, date, tags, slug, thumbnail } = props;
  return (
    <div
      key={id}
      className='rounded-lg overflow-hidden shadow-2xl hover:shadow-lg hover:translate-y-1 transition-all duration-300 text-sky-600'
    >
      <div className='relative w-full h-[120px] md:h-[192px]'>
        <Link href={`/posts/${slug}`}>
          <Image
            className='w-full h-48 object-cover'
            src={thumbnail}
            alt={title}
            fill
          />
        </Link>
      </div>
      <div className='p-4'>
        <Link href={`/posts/${slug}`} passHref>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <p className='text-gray-600 text-sm mb-2'>{date}</p>
          <div className='flex flex-wrap mb-2'>
            {tags.map((tag: any, index: any) => (
              <Link href={`/tags/${tag}`} key={index} passHref>
                <span className='bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2'>
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(TopPost);
