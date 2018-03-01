import React from 'react';
import PropTypes from 'prop-types';

VideoListItem.PropTypes = {
  video: PropTypes.object.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
}

export default function VideoListItem({ video, onVideoSelect }) {
  const imageURL = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageURL} />
        </div>

        <div className="media-body">
          <div className="media-heading"> {videoTitle} </div>
        </div>
      </div>
    </li>
  );
};



