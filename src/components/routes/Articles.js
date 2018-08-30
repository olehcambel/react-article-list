import React, { Fragment } from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';
import { Route } from 'react-router-dom';
import { UserContext } from '../App';

class Articles extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles" render={this.getIndex} exact />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }

  getArticle = ({ match }) => {
    const { id } = match.params;

    return <Article id={id} key={id} />;
  };

  getIndex = () => {
    return (
      <UserContext.Consumer>
        {context => (
          <Fragment>
            <h2> SELECT_ARTICLE </h2>
            <h3>Context USER: {context.state.username}</h3>
          </Fragment>
        )}
      </UserContext.Consumer>
    );
  };
}

export default Articles;
