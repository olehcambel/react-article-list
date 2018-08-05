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
  const { from, to } = state.filters.period;
  const fromParse = Date.parse(String(from));
  const toParse = Date.parse(String(to));

  let filterArticle =
    selection && selection.length
      ? state.articles.filter(a => selection.includes(a.id))
      : state.articles;

  filterArticle =
    from && to
      ? filterArticle.filter(a => {
          return (
            fromParse <= Date.parse(a.date) && Date.parse(a.date) <= toParse
          );
        })
      : filterArticle;

  return {
    articles: filterArticle,
    from,
    to
  };
};

export default connect(mapStateToProps)(accordion(ArticleList));
