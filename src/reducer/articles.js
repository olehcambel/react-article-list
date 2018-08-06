import { normalizrArticles as staticArticles } from '../fixtures';
import * as types from '../constants';

import omit from 'lodash/omit'

const articlesMap = staticArticles.reduce(
  (arr, article) => ({
    ...arr,
    [article.id]: article
  }),
  {}
);

export default (articleState = articlesMap, action) => {
  switch (action.type) {
    case types.ARTICLE_REMOVE:
      return omit(articleState, action.payload.id)
      // return articleState.filter(article => article.id !== action.payload.id);
    default:
      return articleState;
  }
};
