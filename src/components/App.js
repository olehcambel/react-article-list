import React from 'react';

import Filters from './Filters';

import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';

const App = () => (
  <React.Fragment>
    <Counter />
    <UserForm />
    <Filters articles={[]} />
    <ErrorBoundary>
      <ArticleList />
    </ErrorBoundary>
  </React.Fragment>
);

export default App;
