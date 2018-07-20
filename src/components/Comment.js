import React, { Component } from 'react';

const Comment = ({ comment }) => {
  return (
    <ul>
      <li>
        {comment.text} <b> by {comment.user}</b>
      </li>
    </ul>
  );
};

export default Comment;
