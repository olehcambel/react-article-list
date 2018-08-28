import * as types from '../constants';
// import { replace } from 'react-router-redux';
// import axios from 'axios';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function removeArticle(id) {
  return {
    type: types.ARTICLE_REMOVE,
    payload: { id }
  };
}

export function commentAdd(comment, articleId) {
  return {
    type: types.COMMENT_ADD,
    payload: { comment, articleId },
    getId: true
  };
}

export function changeSelection(selection) {
  return {
    type: types.FILTER_RANGE_SELECTION,
    payload: { selection }
  };
}

export function changePeriod(period) {
  return {
    type: types.FILTER_RANGE_PERIOD,
    payload: { period }
  };
}

export function loadAllArticles() {
  return {
    type: types.ARTICLE_LOAD_ALL,
    callAPI: '/api/article'
  };
}

export function loadArticle(id) {
  return {
    type: types.ARTICLE_LOAD,
    callAPI: `/api/article/${id}`,
    payload: { id }
  };
  // return dispatch => {
  //   dispatch({
  //     type: types.ARTICLE_LOAD + types.START,
  //     // callAPI: `/api/article/${id}`,
  //     payload: { id }
  //   });

  //   setTimeout(() => {
  //     axios(`/api/article/${id}`)
  //       .then(response => {
  //         dispatch( {
  //           type: types.ARTICLE_LOAD + types.SUCCESS,
  //           payload: { id, response: response.data }
  //         });
  //       })
  //       .catch(error => {
  //         dispatch(replace('/error'));
  //         dispatch({
  //           type: types.ARTICLE_LOAD + types.FAIL,
  //           payload: { id, error }
  //         });
  //       });
  //   }, 400);
  // };
}

export function loadArticleComments(articleId) {
  return {
    type: types.LOAD_ARTICLE_COMMENTS,
    callAPI: `/api/comment?article=${articleId}`,
    payload: { articleId }
  };
}

export function commentLoadPerPage(page, limit) {
  return (dispatch, getState) => {
    const {
      comments: { pagination }
    } = getState();
    if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids']))
      return;

    dispatch({
      type: types.COMMENT_LOAD_PER_PAGE,
      callAPI: `/api/comment?limit=${limit}&offset=${(page - 1) * limit}`,
      payload: { page }
    });
  };
}
