import React from 'react';

import PropTypes from 'prop-types';

import '../styles.css';

const Comment = ({ comment }) => {
  return (
    <li className="Comment__li">
      {comment.text} <b> by {comment.user}</b>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.string
  }).isRequired
};

Comment.defaultProps = {
  comment: [{
    text: 'nothing',
    user: 'noname'
  }]
}

export default Comment;
