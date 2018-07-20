import React, { Component } from 'react';

import PropTypes from 'prop-types';

import '../styles.sass';

const Comment = ({ comment }) => {
  return (
    <li className="Comment__li">
      {comment.text} <b> by {comment.user}</b>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
