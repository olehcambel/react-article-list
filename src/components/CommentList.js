import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import AddComment from './AddComment';
import { connect } from 'react-redux';
import { Loader } from './Loader';
import { loadArticleComments } from '../AC';
import ToggleButton from './ToggleButton';
import { localizationConsumer } from './localizationContext';

class CommentList extends Component {
  state = { isOpen: false };
  render() {
    const { article, translate } = this.props;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <ToggleButton
          func={this.toggleOpen}
          isOpen={isOpen}
          label={translate.comments}
        />
        {isOpen && this.getBody({ article })}
      </Fragment>
    );
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidUpdate() {
    const {
      loadArticleComments,
      article: { commentsLoading, commentsLoaded, id, commentsError }
    } = this.props;
    if (
      this.state.isOpen &&
      !commentsLoading &&
      !commentsLoaded &&
      !commentsError > 0
    ) {
      loadArticleComments(id);
    }
  }

  getBody = ({
    article: { commentsLoading, commentsLoaded, commentsError, comments, id }
  }) => {
    if (commentsError) return <h2>{commentsError.message}</h2>;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;

    if (comments.length === 0)
      return (
        <Fragment>
          <p>{this.props.translate.firstComment}</p>
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

export default localizationConsumer(
  connect(
    null,
    { loadArticleComments },
    null,
    { pure: false }
  )(CommentList)
);
