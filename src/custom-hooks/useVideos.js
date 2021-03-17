import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../actions/";

const useVideos = (searchString) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos(searchString));
  }, [dispatch, searchString]);
};

export default useVideos;
