import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Graphql() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = new ApolloClient({
      uri: 'http://test55.sakura.ne.jp/wp/graphql',
      cache: new InMemoryCache(),
    });

    const fetchPosts = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query RailsPostQuery {
              allRails {
                edges {
                  node {
                    title
                    slug
                    date
                  }
                }
              }
            }
          `,
        });
        setPosts(data.allRails.edges);
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
      {posts.map(({ node }: any) => (
        <div key={node.id}>
          <h2 className='text-2xl'>{node.title}</h2>
          <p>{node.date}</p>
          <Link href={`/blog/${node.slug}`} className='underline font-bold'>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
