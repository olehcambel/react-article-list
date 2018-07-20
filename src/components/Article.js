import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import toggleOpen from '../decorators/toggleOpen';
import CommentList from './CommentList';

class Article extends PureComponent {
  getBody() {
    // const body = this.state.isOpen && <section>{article.text}</section>;
    if (!this.props.isOpen) return null;
    const { article } = this.props;
    return <section>{article.text}</section>;
  }

  componentWillReceiveProps(nextProps) {
    debugger
    console.log('---updating', this.props.isOpen, nextProps.isOpen);
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <div>
        <h3> {article.title} </h3>
        <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        {this.getBody()}
        <h3>creation date: {new Date(article.date).toDateString()} </h3>

        <CommentList comments={article.comments} />
      </div>
    );
  }

  componentDidMount() {
    console.log('---mounted');
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  }).isRequired
};

export default toggleOpen(Article);
