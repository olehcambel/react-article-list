import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import Comment from './Comment';
import AddComment from './AddComment'

class CommentList extends PureComponent {
  render() {
    const { isOpen, toggleOpen } = this.props;

    return (
      <div>
        <AddComment />

        <button onClick={toggleOpen}>
          {isOpen ? 'close comments' : 'show comments'}
        </button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const { comments, isOpen } = this.props;
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
}

Comment.propTypes = {
  comments: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

CommentList.defaultProps = {
  comments: [],
  isOpen: false

};

export default toggleOpen(CommentList);
