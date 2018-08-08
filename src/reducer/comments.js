import { normalizrComments as staticComments } from '../fixtures';
import * as types from '../constants';
import { arrToMap } from '../helpers';

export default (commentsState = arrToMap(staticComments), action) => {
  switch (action.type) {
    case types.COMMENT_ADD:
      return {
        ...commentsState,
        [action.uuid]: { ...action.payload.comment, id: action.uuid }
      };

    default:
      return commentsState;
  }
};
