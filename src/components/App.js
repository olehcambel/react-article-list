import React from 'react';

import Filters from './Filters';

import articles from '../fixtures';
import ArticleList from './ArticleList';
import UserForm from './UserForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} defaultOpenId={articles[0].id} />
      </div>
    );
  }
}

export default App;
