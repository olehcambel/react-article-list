import React, { Component } from 'react';
import PropTypes from 'prop-types';

import accordion from '../decorators/accordion';
import Article from './Article';
import { connect } from 'react-redux';

class ArticleList extends Component {
  render() {
    const { accordion, currentItemId, articles } = this.props;
    const articleElements = articles.slice().map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={currentItemId === article.id}
          toggleOpen={accordion.bind(this, article.id)}
        />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }
}

Article.propTypes = {
  articles: PropTypes.object,
  currentItemId: PropTypes.string,
  accordion: PropTypes.func
};

export default connect(({ articles }) => ({ articles }))(
  accordion(ArticleList)
);
