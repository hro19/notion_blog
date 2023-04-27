import React from 'react';
import YouTube from 'react-youtube';

const youtube = () => {
  const videoId = 'CZlZgRo0bZ4';
  const opts = {
    playerVars: {
      autoplay: 1,
      start: 3,
    },
  };

  return (
    <div className='youtube-box container mx-auto my-5'>
      <h2 className='tit_yt'>お気に入りyoutube一覧</h2>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default youtube;
