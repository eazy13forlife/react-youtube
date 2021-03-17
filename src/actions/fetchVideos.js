import apiKey from "../apiKeys.js";
import axios from "axios";

import throwAPIError from "./throwAPIError.js";
import types from "./types.js";

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
      console.log(response);
      dispatch({
        type: types.FETCH_VIDEOS,
        payload: response.data.items,
      });
      dispatch(throwAPIError(false));
    } catch {
      dispatch(throwAPIError(true));
    }
  };
};

export default fetchVideos;
