import React, { Component } from 'react';
import PropTypes from 'prop-types';

import accordion from '../decorators/accordion';
import Article from './Article';

class ArticleList extends Component {
  render() {

    const { accordion, currentItemId, articles } = this.props;
    debugger;
    const articleElements = articles.slice().map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={currentItemId === article.id}
          toggleOpen={accordion.bind(this, article.id)}
          // toggleOpen={this.toggleOpen.bind(this, article.id)}
        />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }

  // toggleOpen(articleId) {
  //   this.setState({
  //     currentArticleId:
  //       this.state.currentArticleId === articleId ? null : articleId
  //   });
  // }
}

Article.propTypes = {
  articles: PropTypes.object,
  currentItemId: PropTypes.string,
  accordion: PropTypes.func
};

export default accordion(ArticleList);
