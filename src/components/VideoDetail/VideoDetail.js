import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVideo } from "../../actions/";
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
