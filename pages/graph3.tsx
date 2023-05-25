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

interface ImageData {
  img: string;
  thumbnail: string;
}

export default function Graphql() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [dls, setDls] = useState<ImageData[]>([]);

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
        extractDls(data.gallery.content); // extractDlsを呼び出す
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  const extractDls = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const dlElements = doc.getElementsByTagName('dl');
    const extractedDls: ImageData[] = [];

    for (let i = 0; i < dlElements.length; i++) {
      const dl = dlElements[i];
      const anchorElement = dl.querySelector('a');
      const img = anchorElement?.getAttribute('href') || '';
      const thumbnail =
        anchorElement?.querySelector('img')?.getAttribute('src') || '';

      extractedDls.push({ img, thumbnail });
    }

    setDls(extractedDls);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <h2 className='text-2xl'>
          【{post?.galleryId}】{post?.title}
        </h2>
        <p>{post?.date}</p>
        <Link href={`/blog/${post?.galleryId}`} className='underline font-bold'>
          Read More
        </Link>
        <hr />

        {/* dlsをマップして表示 */}
        {dls.map((dl, index) => (
          <div key={index}>
            <img src={dl.thumbnail} alt={post?.title} />
            <img src={dl.img} alt={post?.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
