import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { fetchVideos } from "../../actions/";
import "./SearchBar.css";

const renderInput = ({ input }) => {
  return <input className="SearchBar__input" type="text" {...input} />;
};

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(fetchVideos(formValues.searchString));
  };

  return (
    <div className="SearchBar">
      <form className="SearchBar__form" onSubmit={props.handleSubmit(onSubmit)}>
        <Field name="searchString" component={renderInput} />
        <input className="SearchBar__button" type="submit" value="search" />
      </form>
    </div>
  );
};

export default reduxForm({
  form: "SearchBar",
})(SearchBar);
