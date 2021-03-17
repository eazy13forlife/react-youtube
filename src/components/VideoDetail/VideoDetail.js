import React from "react";
import { useSelector } from "react-redux";

import "./VideoDetail.css";

const VideoDetail = () => {
  const selectedVideo = useSelector((state) => {
    return state.selectedVideo;
  });

  return (
    <div className="VideoDetail">
      <iframe
        src={`https://www.youtube.com/embed/${selectedVideo.id}`}
        title={selectedVideo.title}
        height="80%"
        width="100%"
        className="VideoDetail__iframe"
      />
      <div className="VideoDetail__info">
        <h2 className="VideoDetail__title">{selectedVideo.title}</h2>
        <p className="VideoDetail__description">{selectedVideo.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
