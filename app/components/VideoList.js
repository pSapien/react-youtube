import React from 'react';
import PropTypes from 'prop-types';

import VideoListItem from './VideoListItem';

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
}

export default function VideoList({ videos, onVideoSelect }) {
  const videoItems = videos.map(video => {
    return <VideoListItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />;
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};


