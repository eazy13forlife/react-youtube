import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { selectVideo } from "../../actions/";

import "./VideoItem.css";

const timeFromNow = (date) => {
  return moment(date).fromNow();
};

const VideoItem = ({
  description,
  title,
  channelTitle,
  publishTime,
  id,
  thumbnail,
}) => {
  const dispatch = useDispatch();

  const onVideoClick = (id, description, title) => {
    dispatch(selectVideo(id, description, title));
  };

  return (
    <div
      className="VideoItem"
      onClick={() => {
        onVideoClick(id.videoId, description, title);
      }}
    >
      <div className="VideoItem__image-container">
        <img src={thumbnail} alt={description} className="VideoItem__image" />
      </div>
      <div className="VideoItem__info">
        <div className="VideoItem__title-channel">
          <p className="VideoItem__title">{title}</p>
          <p className="VideoItem__channel">{channelTitle}</p>
        </div>
        <p className="Videoitem__publishTime">{timeFromNow(publishTime)}</p>
      </div>
    </div>
  );
};

export default VideoItem;
