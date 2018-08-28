// import { normalizrComments as staticComments } from '../fixtures';
import * as types from '../constants';
import { arrToMap } from '../helpers';
import { Map, OrderedMap, Record } from 'immutable';

const CommentsRecord = new Record({
  id: undefined,
  user: undefined,
  text: undefined
});

const ReducerState = new Record({
  entities: new OrderedMap({}),
  pagination: new Map({}),
  total: null
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
  const { payload, uuid, response } = action;

  switch (action.type) {
    case types.COMMENT_ADD:
      return commentsState.setIn(
        ['entities', uuid],
        new CommentsRecord({ ...payload.comment, id: uuid })
      );

    case types.LOAD_ARTICLE_COMMENTS + types.SUCCESS:
      return commentsState.update('entities', entities =>
        entities.merge(arrToMap(response, CommentsRecord))
      );

    case types.COMMENT_LOAD_PER_PAGE + types.START:
      return commentsState.setIn(['pagination', payload.page, 'loading'], true);

    case types.COMMENT_LOAD_PER_PAGE + types.SUCCESS:
      return commentsState
        .mergeIn(['entities'], arrToMap(response.records, CommentsRecord))
        .set('total', response.total)
        .setIn(['pagination', payload.page, 'loading'], false)
        .setIn(
          ['pagination', payload.page, 'ids'],
          response.records.map(record => record.id)
        );

    default:
      return commentsState;
  }
};
