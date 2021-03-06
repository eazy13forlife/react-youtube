import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import hasAPIErrorReducer from "./hasAPIErrorReducer.js";
import selectedVideoReducer from "./selectedVideoReducer.js";
import videosReducer from "./videosReducer.js";
import initialLoadStatusReducer from "./initiaLoadStatusReducer.js";

export default combineReducers({
  videos: videosReducer,
  hasAPIError: hasAPIErrorReducer,
  form: formReducer,
  selectedVideo: selectedVideoReducer,
  initialLoadStatus: initialLoadStatusReducer,
});
