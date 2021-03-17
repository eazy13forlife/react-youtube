import types from "../actions/types.js";
const videosReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_VIDEOS:
      return action.payload;
    default:
      return state;
  }
};

export default videosReducer;
