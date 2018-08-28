import React, { Fragment } from 'react';
import Filters from './Filters';
import UserForm from './UserForm';
import Counter from './Counter';
import Articles from './routes/Articles';
import Comments from './routes/Comments';
import NotFound from './routes/NotFound';
// import ErrorBoundary from './ErrorBoundary';
import { Route, Switch, NavLink } from 'react-router-dom';
import { ConnectedRouter} from 'react-router-redux';
import history from '../history';

/* const App = ({ match: { params } }) => ( */

const App = () => (
  <ConnectedRouter history={history}>
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
          <NavLink activeStyle={{ color: 'pink' }} to="/comments">
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
        <Route path="/comments" component={Comments} />
        {/* <Redirect from="/comments" to="/comments/1" /> */}
        {/* </ErrorBoundary> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </Fragment>
  </ConnectedRouter>
);

export default App;
