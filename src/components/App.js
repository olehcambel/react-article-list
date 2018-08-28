import React, { Fragment } from 'react';
import Filters from './Filters';
// import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Counter from './Counter';
// import ErrorBoundary from './ErrorBoundary';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import Articles from './routes/Articles';
import Comments from './routes/Comments';
import NotFound from './routes/NotFound';
/* const App = ({ match: { params } }) => ( */

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
        <div>
          <NavLink activeStyle={{ color: 'pink' }} to="/comments/1">
            Comments
          </NavLink>
        </div>
      </div>
      <UserForm />
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/filters" component={Filters} />
        {/* <ErrorBoundary> */}
        <Route path="/articles" component={Articles} />
        <Route path="/comments/:page" component={Comments} />
        {/* </ErrorBoundary> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);

export default App;
