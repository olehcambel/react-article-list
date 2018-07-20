import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.commx;
  }

  getBody() {
    const { comments } = this.props;
    const { isOpen } = this.state;
    debugger;
    if (!isOpen) return null;
    if (!comments || !comments.length) return <p>Be the first to comment.</p>;

    return (
      <div>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    );
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button onClick={this.toggleOpen.bind(this)}>
          {isOpen ? 'close comments' : 'show comments'}{' '}
        </button>
        {this.getBody()}
      </div>
    );
  }

  handleToggleComment() {
    this.setState({ isOpen: !this.state.isOpen });
  }
}

export default CommentList;
