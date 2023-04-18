import React from 'react';
import useSWR from 'swr';

const Swr = () => {
  const fetcher = (url: string): Promise<any> =>
    fetch(url).then((res) => res.json());

  const { data, error } = useSWR('/api/image', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map((im: any) => (
        <div key={im.src}>
          {im.src}
          <br />
          {im.width}
        </div>
      ))}
    </div>
  );
};

export default Swr;
