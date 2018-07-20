import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import Comment from './Comment';

class CommentList extends PureComponent {
  getBody() {
    const { comments, isOpen } = this.props;
    // const { isOpen } = this.state;
    if (!isOpen) return null;
    if (!comments.length) return <p>Be the first to comment.</p>;

    return (
      <div>
        <ul>
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { isOpen, toggleOpen } = this.props;

    return (
      <div>
        <button onClick={toggleOpen}>
          {isOpen ? 'close comments' : 'show comments'}
        </button>
        {this.getBody()}
      </div>
    );
  }
}

CommentList.defaultProps = {
  comments: []
};

export default toggleOpen(CommentList);
