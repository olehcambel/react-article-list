import { normalizrComments as staticComments } from '../fixtures';
// import * as types from '../constants';

const commentsMap = staticComments.reduce(
  (arr, comment) => ({
    ...arr,
    [comment.id]: comment
  }),
  {}
);

export default (commentsState = commentsMap, action) => {
  switch (action.type) {
    default:
      return commentsState;
  }
};
