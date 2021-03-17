import types from "./types.js";
const selectVideo = (id, description, title) => {
  return {
    type: types.SELECT_VIDEO,
    payload: {
      id,
      description,
      title,
    },
  };
};

export default selectVideo;
