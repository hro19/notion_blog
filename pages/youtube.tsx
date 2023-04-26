import React from 'react';
import YouTube from 'react-youtube';

const youtube = () => {
  const videoId = 'CZlZgRo0bZ4';
  const opts = {
    height: '720',
    width: '1280',
    playerVars: {
      autoplay: 1,
      start: 3,
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default youtube;
