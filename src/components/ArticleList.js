import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import Article from './Article';
import { connect } from 'react-redux';
import { filtratedArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';
import {Loader} from './Loader'
import { NavLink } from 'react-router-dom';


class ArticleList extends PureComponent {
  state = {};

  render() {
    const { accordion, currentItemId, articles, loading, error } = this.props;

    if (error) return <h1>{error.message}</h1>
    if (loading) return <Loader size='large' />;
    return (
      <ul>
        {articles.map(article => (
          <Article
            key={article.id}
            article={article}
            isOpen={currentItemId === article.id}
            toggleOpen={accordion.bind(this, article.id)}
          />
        ))}
      </ul>
    );
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded && !loading) loadAllArticles();
  }
}

Article.propTypes = {
  articles: PropTypes.object,
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
)(accordion(ArticleList));
