import * as types from '../constants';
import { arrToMap } from '../helpers';
import { Record, OrderedMap } from 'immutable';

const ArticleRecord = Record({
  text: undefined,
  title: undefined,
  date: undefined,
  id: undefined,
  error: undefined,
  loading: false,
  commentsLoading: false,
  commentsLoaded: false,
  commentsError: '',
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
  const { payload, uuid, response, error } = action;

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
      return articleState.set('loading', true).set('error', '');

    case types.ARTICLE_LOAD_ALL + types.SUCCESS:
      return articleState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true);

    case types.ARTICLE_LOAD_ALL + types.FAIL:
      return articleState
        .set('loading', false)
        .set('loaded', true)
        .set('error', error);

    case types.ARTICLE_LOAD + types.START:
      return articleState
        .setIn(['entities', payload.id, 'loading'], true)
        .setIn(['entities', payload.id, 'error'], '');

    case types.ARTICLE_LOAD + types.SUCCESS:
      return articleState.setIn(
        ['entities', response.id],
        new ArticleRecord(response)
      );

    case types.ARTICLE_LOAD + types.FAIL:
      return articleState
        .set('loading', false)
        .set('loaded', true)
        .setIn(['entities', payload.id, 'error'], error);

    case types.LOAD_ARTICLE_COMMENTS + types.START:
      return articleState.setIn(
        ['entities', payload.articleId, 'commentsLoading'],
        true
      );

    case types.LOAD_ARTICLE_COMMENTS + types.SUCCESS:
      return articleState
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsLoaded'], true);

    case types.LOAD_ARTICLE_COMMENTS + types.FAIL:
      return articleState
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsLoaded'], false)
        .setIn(['entities', payload.articleId, 'commentsError'], error);

    default:
      return articleState;
  }
};
