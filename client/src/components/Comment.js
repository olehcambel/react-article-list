import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../styles.css';
import { commentSelectorRepo } from '../selectors';

const Comment = ({ comment }) => {
  return (
    <li className="Comment__li">
      {comment.text} <b> by {comment.user}</b>
    </li>
  );
};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.shape({
    text: PropTypes.string,
    user: PropTypes.string
  }).isRequired
};

Comment.defaultProps = {
  comment: [
    {
      text: 'nothing',
      user: 'noname'
    }
  ]
};

const mapStateToProps = () => {
  const commentSelector = commentSelectorRepo();

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  });
};

export default connect(mapStateToProps)(Comment);
