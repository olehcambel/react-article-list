import * as types from '../constants';
import axios from 'axios';

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
  return dispatch => {
    dispatch({
      type: types.ARTICLE_LOAD + types.START,
      payload: { id }
    });

    setTimeout(() => {
      axios(`/api/article/${id}`)
        .then(response =>
          dispatch({
            type: types.ARTICLE_LOAD + types.SUCCESS,
            payload: { id, response: response.data }
          })
        )
        .catch(error =>
          dispatch({
            type: types.ARTICLE_LOAD + types.FAIL,
            payload: { id, error }
          })
        );
    }, 3000);
  };
}
