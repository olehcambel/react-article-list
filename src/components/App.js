import React, { Fragment } from 'react';
import Filters from './Filters';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';
import ErrorBoundary from './ErrorBoundary';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

const App = () => (
  <Router>
    <Fragment>
      <div>
        <h2>Main menu</h2>
        <div>
          <NavLink activeStyle={{ color: 'pink' }} to="/counter">
            Counter
          </NavLink>
        </div>
        <div>
          <NavLink activeStyle={{ color: 'pink' }} to="/filters">
            Filters
          </NavLink>
        </div>
        <div>
          <NavLink activeStyle={{ color: 'pink' }} to="/articles">
            ArticleList
          </NavLink>
        </div>
      </div>
      <UserForm />
      <Route path="/counter" component={Counter} />
      <Route path="/filters" component={Filters} />
      <ErrorBoundary>
        <Route path="/articles" component={ArticleList} />
      </ErrorBoundary>
    </Fragment>
  </Router>
);

export default App;
