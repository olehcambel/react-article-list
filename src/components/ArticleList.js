import React from 'react';
import PropTypes from 'prop-types';

import accordion from '../decorators/accordion';
import Article from './Article';
import { connect } from 'react-redux';

const ArticleList = ({ accordion, currentItemId, articles }) => {
  return (
    <ul>
      {articles
        .slice()
        .map(article => (
          <Article
            key={article.id}
            article={article}
            isOpen={currentItemId === article.id}
            toggleOpen={accordion.bind(this, article.id)}
          />
        ))}
    </ul>
  );
};

Article.propTypes = {
  articles: PropTypes.object,
  currentItemId: PropTypes.string,
  accordion: PropTypes.func
};

const mapStateToProps = state => {
  const { selection } = state.filters;
  return {
    articles:
      selection && selection.length
        ? state.articles.filter(a => selection.includes(a.id))
        : state.articles
  };
};

export default connect(mapStateToProps)(accordion(ArticleList));
