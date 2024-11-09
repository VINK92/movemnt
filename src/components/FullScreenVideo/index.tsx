import React from 'react';

const FullScreenVideo = ({ src }: { src: string }) => (
  <div style={ {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1,
  } }
  >
    <video
      src={ src }
      autoPlay
      muted
      loop
      playsInline
      style={ {
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
      } }
    />
  </div>
);

export default FullScreenVideo;
