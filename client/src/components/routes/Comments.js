import React from 'react';
import CommentPagination from '../CommentPagination';
import { Route, Redirect } from 'react-router-dom';

const Comments = ({ match }) => {
  if (match.isExact) return <Redirect to="/comments/1" />;
  return <Route path="/comments/:page" render={getCommentsPaginator} />;
};

const getCommentsPaginator = ({ match }) => (
  <CommentPagination page={match.params.page} limit="5" />
);

export default Comments;
