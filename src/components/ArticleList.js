import React, { Component } from 'react';

import Article from './Article';

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArticleId: null
    }
  }

  render() {
    const articleElements = this.props.articles.slice().map(article => (
      <li key={article.id}>
        <Article article={article}
          isOpen={this.state.currentArticleId === article.id} toggleOpen={this.toggleOpen.bind(this, article.id)}
        />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }

  toggleOpen(articleId) {
    this.setState({
      currentArticleId: this.state.currentArticleId === articleId ? null : articleId 
    })
  }
}
