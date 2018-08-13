import * as types from '../constants';
import { arrToMap } from '../helpers';
import { Record, OrderedMap } from 'immutable';

const ArticleRecord = Record({
  text: undefined,
  title: undefined,
  date: undefined,
  id: undefined,
  loading: false,
  comments: []
});

const ReducerState = new Record({
  error: '',
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
  const { payload, uuid } = action;

  switch (action.type) {
    case types.ARTICLE_REMOVE:
      return articleState.deleteIn(['entities', payload.id]);

    case types.COMMENT_ADD:
      return articleState.updateIn(
        ['entities', payload.articleId, 'comments'],
        comments => {
          return [...comments, uuid];
        }
      );

    case types.ARTICLE_LOAD_ALL + types.START:
      return articleState.set('loading', true);

    case types.ARTICLE_LOAD_ALL + types.SUCCESS:
      return articleState
        .set('entities', arrToMap(payload.response, ArticleRecord))
        .set('error', '')
        .set('loading', false)
        .set('loaded', true);

    case types.ARTICLE_LOAD_ALL + types.FAIL:
      ;
      return articleState
        .set('loading', false)
        .set('loaded', true)
        .set('error', action.payload.error);

    case types.ARTICLE_LOAD + types.START:
      return articleState
        .setIn(['entities', payload.id, 'loading'], true)
        .set('error', '');

    case types.ARTICLE_LOAD + types.SUCCESS:
      return articleState.setIn(
        ['entities', payload.id],
        new ArticleRecord(payload.response)
      );

    case types.ARTICLE_LOAD + types.FAIL:
      ;
      return (
        articleState
          // .set('entities', action.error)
          .set('loading', false)
          .set('loaded', true)
          .set('error', action.payload.error)
      );
    default:
      return articleState;
  }
};
