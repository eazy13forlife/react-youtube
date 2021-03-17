import React from "react";
import { useSelector } from "react-redux";

import VideoItem from "../VideoItem/VideoItem.js";

const VideoList = () => {
  const videos = useSelector((state) => {
    return state.videos;
  });
  const renderedVideos = videos.map(({ id, snippet }) => {
    return (
      <VideoItem
        key={id.videoId}
        description={snippet.description}
        title={snippet.title}
        channelTitle={snippet.channelTitle}
        publishTime={snippet.publishTime}
        thumbnail={snippet.thumbnails.default.url}
        id={id}
      />
    );
  });

  const renderVideoList = () => {
    if (!videos.length) {
      return null;
    } else {
      return renderedVideos;
    }
  };
  return <div className="VideoList">{renderVideoList()}</div>;
};

export default VideoList;
