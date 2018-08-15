import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';
import { Route } from 'react-router-dom';

class Articles extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles" render={this.getIndex} exact />
        <Route path="/articles/:id" render={this.getArticle} />
        {/* <Route path="/articles/:id" component={Article} /> */}
      </div>
    );
  }

  getArticle = ({ match }) => {
    const { id } = match.params;

    return <Article id={id} isOpen key={id} />;
  };

  getIndex = () => {
    return  <h2> SELECT_ARTICLE </h2>
  };
}

export default Articles;
