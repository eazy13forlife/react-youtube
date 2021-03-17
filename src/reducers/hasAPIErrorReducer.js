import types from "../actions/types.js";

const hasAPIErrorReducer = (state = false, action) => {
  switch (action.type) {
    case types.THROW_API_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default hasAPIErrorReducer;
