import * as types from '../constants';
import { arrToMap } from '../helpers';
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
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)
        
    case types.ARTICLE_LOAD_ALL + types.FAIL:
      return articleState
        // .set('entities', )
        .set('loading', false)
        .set('loaded', false)
    default:
      return articleState;
  }
};
