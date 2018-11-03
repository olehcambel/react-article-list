import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { commentAdd } from '../../AC';

const AddComment = ({ onSaveComment }) => (
  <div>
    <Form onSaveComment={onSaveComment} />
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // or only (comment) with values #comment ?
    onSaveComment: ({ user, message: text }) => {
      dispatch(
        commentAdd({ user: user.value, text: text.value }, ownProps.articleId)
      );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddComment);
