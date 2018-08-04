import React from 'react';

import Filters from './Filters';

import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';

const App = () => (
  <div>
    <Counter />
    <UserForm />
    <Filters articles={[]} />
    <ArticleList />
  </div>
);

export default App;
