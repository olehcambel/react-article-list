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
  const articleId = ownProps.id;
  return {
    onSaveComment: ({ user, message }) => {
      dispatch(
        commentAdd({ user: user.value, text: message.value, articleId })
      );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddComment);
