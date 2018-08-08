import { normalizrArticles as staticArticles } from '../fixtures';
import * as types from '../constants';

import omit from 'lodash/omit';

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
      return omit(articleState, action.payload.id);
    // return articleState.filter(article => article.id !== action.payload.id);
    case types.COMMENT_ADD:
      const { articleId, id } = action.payload;
      return {
        ...articleState,
        [articleId]: {
          ...articleState[articleId],
          comments: [...articleState[articleId].comments, id]
        }
      };
    // return articleState;
    // {...articleState, articleState[action.payload.data.articleId]: {comments: {...articleState[action.payload.data.articleId].comments, 44}}}

    // {...articleState, [action.payload.data.articleId]: {comments: {...articleState.([action.payload.data.articleId]).comments, action.payload.data.id}}}

    //  return Object.assign({}, articleState, {[articleId]: {...articleState[articleId], comments: [...articleState[articleId].comments, id]}})
    default:
      return articleState;
  }
};
