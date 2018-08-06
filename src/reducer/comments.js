import { normalizrComments as staticComments } from '../fixtures';
// import * as types from '../constants';

const commentsMap = staticComments.reduce(
  (acc, comment) => ({
    ...acc,
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
