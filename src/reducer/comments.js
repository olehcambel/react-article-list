// import { normalizrComments as staticComments } from '../fixtures';
import * as types from '../constants';
import { arrToMap } from '../helpers';
import { OrderedMap, Record } from 'immutable';

const CommentsRecord = new Record({
  id: undefined,
  user: undefined,
  text: undefined
});

const ReducerState = new Record({
  entities: new OrderedMap({})
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
    // return commentsState.set('entities', arrToMap(response, CommentsRecord));

    default:
      return commentsState;
  }
};
