// import { normalizrArticles as staticArticles } from '../fixtures';
import * as types from '../constants';
import { arrToMap } from '../helpers';
// import omit from 'lodash/omit';
import { Record, OrderedMap } from 'immutable';

const ArticleRecord = Record({
  text: undefined,
  title: undefined,
  id: undefined,
  comments: []
});

const ReducerState = new Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
  const { payload, uuid, response } = action;

  switch (action.type) {
    case types.ARTICLE_REMOVE:
      // return omit(articleState, payload.id);
      return articleState.deleteIn(['entities', payload.id]);

    case types.COMMENT_ADD:
      return articleState.updateIn(
        ['entities', payload.articleId, 'comments'],
        comments => {
          return [...comments, uuid];
        }
      );

    // const article = articleState[payload.articleId];
    //   return {
    //     ...articleState,
    //     [payload.articleId]: {
    //       ...article,
    //       comments: [...(article.comments || []), uuid]
    //       // comments: (article.comments || []).concat(uuid)
    //     }
    //   };

    case types.ARTICLE_LOAD_ALL:
      return articleState.set('entities', arrToMap(response, ArticleRecord));
    default:
      return articleState;
  }
};
