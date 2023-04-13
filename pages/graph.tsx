import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Graphql() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = new ApolloClient({
      uri: 'https://www.wrj.jp/wp/graphql',
      cache: new InMemoryCache(),
    });

    const fetchPosts = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query NewQuery {
              blogs(first: 20) {
                edges {
                  node {
                    title
                    date
                    link
                    id
                  }
                }
              }
            }
          `,
        });
        setPosts(data.blogs.edges);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {posts.map(({ node }: any, index: number) => (
        <div key={node.id}>
          <h2 className='text-2xl'>
            【{index}】{node.title}
          </h2>
          <p>{node.date}</p>
          <Link href={`/blog/${node.slug}`} className='underline font-bold'>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
