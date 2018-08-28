import React from 'react';
import CommentPagination from '../CommentPagination';

const Comments = ({ match }) => <CommentPagination page={match.params.page} />;

export default Comments;
