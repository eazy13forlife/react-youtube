import types from "./types.js";
const endInitialLoad = () => {
  return {
    type: types.END_INITIAL_LOAD,
  };
};

export default endInitialLoad;
