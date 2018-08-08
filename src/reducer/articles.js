import { normalizrArticles as staticArticles } from '../fixtures';
import * as types from '../constants';
import { arrToMap } from '../helpers';
import omit from 'lodash/omit';

export default (articleState = arrToMap(staticArticles), action) => {
  const { payload, uuid } = action;

  switch (action.type) {
    case types.ARTICLE_REMOVE:
      return omit(articleState, payload.id);

    case types.COMMENT_ADD:
      const article = articleState[payload.articleId];
      return {
        ...articleState,
        [payload.articleId]: {
          ...article,
          comments: [...article.comments || [], uuid]
          // comments: (article.comments || []).concat(uuid)
        }
      };

    default:
      return articleState;
  }
};
