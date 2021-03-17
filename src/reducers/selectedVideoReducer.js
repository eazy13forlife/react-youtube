import types from "../actions/types.js";

const selectedVideoReducer = (state = [], action) => {
  switch (action.type) {
    case types.SELECT_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

export default selectedVideoReducer;
