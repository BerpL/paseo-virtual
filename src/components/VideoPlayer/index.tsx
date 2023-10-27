import React from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <ReactPlayer
      playing
      controls
      url={src}
      width="100%"
      height="100%"
    />
  );
}

export default VideoPlayer;
