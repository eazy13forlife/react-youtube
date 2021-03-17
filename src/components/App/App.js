import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import VideoList from "../VideoList/VideoList.js";
import fetchVideos from "../../actions/fetchVideos.js";
import SearchBar from "../SearchBar/SearchBar.js";
import VideoDetail from "../VideoDetail/VideoDetail.js";
import warningSign from "../../images/warningsign.png";
import stopSign from "../../images/stopsign.png";
import useVideos from "../../custom-hooks/useVideos.js";
import { selectVideo } from "../../actions/";

const App = () => {
  useVideos("car");

  const videos = useSelector((state) => {
    return state.videos;
  });

  const hasAPIError = useSelector((state) => {
    return state.hasAPIError;
  });

  const renderMain = () => {
    if (hasAPIError) {
      return (
        <div className="ErrorApp__content-container">
          <img src={stopSign} alt="stop sign" className="ErrorApp__image" />
          <p className="ErrorApp__API-error">
            Something went wrong trying to access videos. Try again.
          </p>
        </div>
      );
    } else if (videos.length) {
      return (
        <React.Fragment>
          <div className="App__VideoDetail-VideoList">
            <VideoDetail />
            <VideoList />
          </div>
        </React.Fragment>
      );
    } else if (!videos.length) {
      return (
        <div className="ErrorApp__content-container">
          <div className="ErrorApp__content">
            <img
              src={warningSign}
              alt="warning sign"
              className="ErrorApp__image"
            />
            <h1 className="ErrorApp__title"> No results found</h1>
            <p className="ErrorApp__solution"> Try different keywords</p>
          </div>
        </div>
      );
    }
  };

  const returnClassName = () => {
    if (!videos.length || hasAPIError) {
      return "ErrorApp";
    } else {
      return "App";
    }
  };

  return (
    <div className={returnClassName()}>
      <SearchBar />
      {renderMain()}
    </div>
  );
};

export default App;
