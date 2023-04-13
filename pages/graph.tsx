import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Graphql() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://test55.sakura.ne.jp/wp/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
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
        }),
      });
      const { data } = await response.json();
      setPosts(data.allRails.edges);
      setLoading(false);
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
