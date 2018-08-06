import React from 'react';

import Select from 'react-select';
import { connect } from 'react-redux';
import { changeSelection } from '../../AC';
// import mapValue from 'lodash/mapValues'

const SelectFilter = ({ changeSelection, selection, articles }) => {
  const options = Object.values(articles).map(article => ({
       label: article.title,
    value: article.id
  }))
  // const options = articles.map(article => ({
  //   label: article.title,
  //   value: article.id
  // }));


  return (
    <Select
      onChange={changeSelection}
      // value={value="hoh"}
      options={options}
      isMulti
    />
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    selection: state.selection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelection: selection =>
      dispatch(changeSelection(selection.map(s => s.value)))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter);
