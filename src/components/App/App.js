import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

import VideoList from "../VideoList/VideoList.js";
import fetchVideos from "../../actions/fetchVideos.js";
import SearchBar from "../SearchBar/SearchBar.js";
import VideoDetail from "../VideoDetail/VideoDetail.js";
import warningSign from "../../images/warningsign.png";

const App = () => {
  const videos = useSelector((state) => {
    return state.videos;
  });
  const renderMain = () => {
    if (videos.length) {
      return (
        <React.Fragment>
          <div className="App__VideoDetail-VideoList">
            <VideoDetail />
            <VideoList />
          </div>
        </React.Fragment>
      );
    } else {
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
    if (!videos.length || !videos) {
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
