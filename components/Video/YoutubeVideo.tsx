import React from 'react';

const YoutubeVideo = ({ url, classes }: { url: string; classes?: string }) => (
  <div className={classes}>
    <div className="relative h-0 pb-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        width="560"
        height="315"
        src={`${url}?rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

YoutubeVideo.defaultProps = {
  classes: '',
};

export default YoutubeVideo;
