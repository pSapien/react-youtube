import React from 'react';
import PropTypes from 'prop-types';

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
}

export default function VideoDetail({ video }) {
  const { snippet: { title, description }, id } = video;
  const url = `https://www.youtube.com/embed/${id.videoId}`;

  if (!video) {
    return <div>Loading.......</div>;
  }

  console.log(video)
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>

      <div className="details">
        <div> {title} </div>
        <div> {description} </div>
      </div>
    </div>
  );
};



