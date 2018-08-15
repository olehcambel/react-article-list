import React, { PureComponent } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './style.css';
import {Loader} from '../Loader';
import CommentList from '../CommentList';
import { connect } from 'react-redux';
import { removeArticle, loadArticle } from '../../AC';

class Article extends PureComponent {
  render() {
    const { article, isOpen, toggleOpen } = this.props;
    if (article.error) {
      return <h2>{article.error.message}</h2>;
    }
    if (isOpen && article.loading) return <Loader />;
    return (
      <li>
        <h3> {article.title} </h3>
        <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        <button onClick={this.handleRemove}> remove Article </button>
        <ReactCSSTransitionGroup
          transitionName="Article"
          transitionEnterTimeout={550}
          transitionLeaveTimeout={400}
          transitionAppear={true}
          transitionAppearTimeout={500}
          component="div"
        >
          {isOpen && !article.loading && this.getBody()}
        </ReactCSSTransitionGroup>
      </li>
    );
  }

  componentDidUpdate({ article, isOpen, loadArticle }) {
    if (!isOpen && this.props.isOpen && !article.text && !article.loading) {
      loadArticle(article.id);
    }
  }

  getBody() {
    const { article } = this.props;
    return (
      <section>
        {article.text}
        <h3>creation date: {new Date(article.date).toDateString()} </h3>
        <CommentList article={article} id={article.id} />
      </section>
    );
  }

  handleRemove = () => {
    const { removeArticle, article } = this.props;
    removeArticle(article.id);

    console.log('removing');
  };
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired
};

Article.defaultProps = {
  article: [
    {
      title: 'none',
      text: 'none',
      comments: []
    }
  ],
  isOpen: false
};

export default connect(
  null,
  { removeArticle, loadArticle }
)(Article);
