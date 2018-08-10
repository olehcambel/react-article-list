import React from 'react';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import Article from './Article';
import { connect } from 'react-redux';
import { filtratedArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';

class ArticleList extends React.Component {
  state = {};

  render() {
    const { accordion, currentItemId, articles } = this.props;
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
    this.props.loadAllArticles();
  }
}

Article.propTypes = {
  articles: PropTypes.object,
  currentItemId: PropTypes.string,
  accordion: PropTypes.func
};

const mapStateToProps = state => {
  return {
    articles: filtratedArticlesSelector(state)
  };
};

export default connect(
  mapStateToProps,
  { loadAllArticles }
)(accordion(ArticleList));
