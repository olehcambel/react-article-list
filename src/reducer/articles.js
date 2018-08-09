// import { normalizrArticles as staticArticles } from '../fixtures';
import * as types from '../constants';
import { arrToMap } from '../helpers';
import omit from 'lodash/omit';

export default (articleState = {}, action) => {
  const { payload, uuid, response } = action;

  switch (action.type) {
    case types.ARTICLE_REMOVE:
      return omit(articleState, payload.id);

    case types.COMMENT_ADD:
      const article = articleState[payload.articleId];
      return {
        ...articleState,
        [payload.articleId]: {
          ...article,
          comments: [...(article.comments || []), uuid]
          // comments: (article.comments || []).concat(uuid)
        }
      };

    case types.ARTICLE_LOAD_ALL:
      return arrToMap(response);
    default:
      return articleState;
  }
};
