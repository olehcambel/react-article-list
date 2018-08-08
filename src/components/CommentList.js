import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import Comment from './Comment';
import AddComment from './AddComment';

class CommentList extends PureComponent {
  render() {
    const { isOpen, toggleOpen, article: {comments, id}} = this.props;

    return (
      <div>
        <button onClick={toggleOpen}>
          {isOpen ? 'close comments' : 'show comments'}
        </button>

        {!isOpen || (comments.length === 0 && <p>Be the first to comment.</p>)}
        {!isOpen ||
          comments.length === 0 || (
            <ul>{comments.map(id => <Comment key={id} id={id} />)}</ul>
          )}
        {!isOpen || <AddComment articleId={id} />}
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
};

CommentList.defaultProps = {
  comments: [],
  isOpen: false
};

export default toggleOpen(CommentList);
