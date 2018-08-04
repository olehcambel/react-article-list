import staticArticles from '../fixtures';
import * as types from '../constants';

export default (articleState = staticArticles, action) => {
  switch (action.type) {
    case types.ARTICLE_REMOVE:
      return articleState.filter(article => article.id !== action.payload.id);
    default:
      return articleState;
  }
};
