import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Article from './Article';
import { connect } from 'react-redux';
import { filtratedArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';
import { Loader } from './Loader';

import LinkRoutes from './LinkRoutes';

class ArticleList extends PureComponent {
  state = {};
  render() {
    const { articles, loading, error } = this.props;

    if (error) return <h1>{error.message}</h1>;
    if (loading) return <Loader size="large" />;

    return (
      <ul>
        {articles.map(article => {
          // ISSUE: fix bug with empty link.. /articles/wrong
          if (!article.id) return null;
          return (
            <LinkRoutes
              key={article.id}
              to={`/articles/${article.id}`}
              title={article.title}
            />
          );
        })}
      </ul>
    );
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded && !loading) loadAllArticles();
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array,
  currentItemId: PropTypes.string,
  accordion: PropTypes.func
};

const mapStateToProps = state => {
  return {
    articles: filtratedArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded,
    error: state.articles.error
  };
};

export default connect(
  mapStateToProps,
  { loadAllArticles }
)(ArticleList);

// <Article
//   key={article.id}
//   article={article}
//   isOpen={currentItemId === article.id}
//   toggleOpen={accordion.bind(this, article.id)}
// />
