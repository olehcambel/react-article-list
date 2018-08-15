import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import Comment from './Comment';
import AddComment from './AddComment';
import { connect } from 'react-redux';
import {Loader} from './Loader'
import { loadArticleComments } from '../AC';
import ToggleButton from './ToggleButton';

const getBody = ({
  article: { commentsLoading, commentsLoaded, commentsError, comments, id }
}) => {
  if (commentsError) return <h2>{commentsError.message}</h2>;
  if (commentsLoading) return <Loader />;
  if (!commentsLoaded) return null;

  if (comments.length === 0)
    return (
      <Fragment>
        <p>Be the first to comment.</p>
        <AddComment articleId={id} />
      </Fragment>
    );
  return (
    <Fragment>
      <ul>
        {comments.map(id => (
          <Comment key={id} id={id} />
        ))}
      </ul>
      <AddComment articleId={id} />
    </Fragment>
  );
};

class CommentList extends PureComponent {
  render() {
    const { isOpen, toggleOpen, article } = this.props;
    return (
      <Fragment>
        <ToggleButton func={toggleOpen} isOpen={isOpen} label="comments" />
        {isOpen && getBody({ article })}
      </Fragment>
    );
  }

  componentDidUpdate() {
    const {
      isOpen,
      loadArticleComments,
      article: { commentsLoading, commentsLoaded, id, commentsError }
    } = this.props;
    if (isOpen && !commentsLoading && !commentsLoaded && !commentsError > 0) {
      loadArticleComments(id);
    }
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

export default connect(
  null,
  { loadArticleComments }
)(toggleOpen(CommentList));
