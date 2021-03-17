import types from "./types.js";

const throwAPIError = (boolean) => {
  return {
    type: types.THROW_API_ERROR,
    payload: boolean,
  };
};

export default throwAPIError;
