import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

interface Post {
  id: string;
  title: string;
  date: string;
  galleryId: number;
  content: string;
}

export default function Graphql() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = new ApolloClient({
      uri: 'https://www.wrj.jp/wp/graphql',
      cache: new InMemoryCache(),
    });

    const fetchPost = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query NewQuery {
              gallery(id: 5149, idType: DATABASE_ID) {
                id
                title
                date
                galleryId
                content
              }
            }
          `,
        });
        setPost(data.gallery);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <h2 className='text-2xl'>
          【{post.galleryId}】{post.title}
        </h2>
        <p>{post.date}</p>
        <Link href={`/blog/${post.galleryId}`} className='underline font-bold'>
          Read More
        </Link>
        <hr />
        <div className='contents'>{post.content}</div>
      </div>
    </div>
  );
}
