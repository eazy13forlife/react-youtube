import types from "../actions/types.js";
const initialLoadStatusReducer = (state = false, action) => {
  switch (action.type) {
    case types.END_INITIAL_LOAD:
      return true;
    default:
      return state;
  }
};

export default initialLoadStatusReducer;
