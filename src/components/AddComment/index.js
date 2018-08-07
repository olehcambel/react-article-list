import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
// import { v4 } from 'node-uuid';

const AddComment = ({ onSaveComment }) => (
  <div>
    <Form onSaveComment={onSaveComment} />
  </div>
);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveComment: ({ user, message }) => {
      // debugger;
      // TODO:
      //   create Action to dispatch and
      //   pass through middleware for uuid to reducer
      console.warn(user.value, message.value);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
