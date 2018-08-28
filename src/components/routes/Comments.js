import React from 'react';
import CommentPagination from '../CommentPagination';

const Comments = ({ match }) => (
  <CommentPagination page={match.params.page} limit="5" />
);

export default Comments;
