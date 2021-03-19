import apiKey from "../apiKeys.js";
import axios from "axios";

import throwAPIError from "./throwAPIError.js";
import types from "./types.js";
import selectVideo from "./selectVideo.js";
import { endInitialLoad } from "./";

const fetchVideos = (searchString) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: apiKey,
            q: searchString,
            part: "snippet",
          },
        }
      );
      await dispatch({
        type: types.FETCH_VIDEOS,
        payload: response.data.items,
      });

      const video = getState().videos[0];

      if (video) {
        const { id, snippet } = video;
        await dispatch(
          selectVideo(id.videoId, snippet.description, snippet.title)
        );
      }
      dispatch(throwAPIError(false));
    } catch (error) {
      dispatch(throwAPIError(true));
    }

    dispatch(endInitialLoad());
  };
};

export default fetchVideos;
