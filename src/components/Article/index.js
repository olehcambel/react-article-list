import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './style.css';
import { Loader } from '../Loader';
import CommentList from '../CommentList';
import { connect } from 'react-redux';
import { removeArticle, loadArticle } from '../../AC';
import { localizationConsumer } from '../localizationContext';
import { articleSelectorRepo } from '../../selectors';

import toggleOpen from '../../decorators/toggleOpen';
import ToggleButton from '../ToggleButton';

class Article extends Component {
  state = {};
  render() {
    const { article, loading, isOpen, toggleOpen, translate } = this.props;
    if (!article) return null;
    if (article.error) {
      return <h2>{article.error.message}</h2>;
    }
    if (isOpen && loading) return <Loader />;
    return (
      <Fragment>
        <h3> {article.title} </h3>
        <ToggleButton
          func={toggleOpen}
          isOpen={isOpen}
          label={translate.article}
        />
        <button onClick={this.handleRemove}>
          {translate.remove} {translate.article}
        </button>
        <ReactCSSTransitionGroup
          transitionName="Article"
          transitionEnterTimeout={550}
          transitionLeaveTimeout={400}
          transitionAppear={true}
          transitionAppearTimeout={500}
          component="div"
        >
          {isOpen &&
            !article.loading && (
              <section>
                {article.text}
                <h3>
                  {translate.date}: {new Date(article.date).toDateString()}
                </h3>
                <CommentList article={article} id={article.id} />
              </section>
            )}
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }

  componentDidMount() {
    const { article, id, loadArticle } = this.props;
    if (!article || (!article.text && !article.loading)) loadArticle(id);
  }

  handleRemove = () => {
    const { removeArticle, article } = this.props;
    removeArticle(article.id);

    console.log('removing');
  };
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  //connect
  article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array
  })
};

// Article.defaultProps = {
//   article: {
//     title: 'none',
//     text: 'none',
//     comments: []
//   },
//   isOpen: false
// };

const mapStateToProps = (state, ownProps) => {
  const articlesSelector = articleSelectorRepo();
  return {
    id: ownProps.id,
    article: articlesSelector(state, ownProps),
    loading: state.articles.entities.getIn([ownProps.id, 'loading'])
    // error: state.articles.entities.getIn([ownProps.id, 'error']),
  };
};

export default localizationConsumer(
  connect(
    mapStateToProps,
    { removeArticle, loadArticle },
    null,
    { pure: false }
  )(toggleOpen(Article))
);
