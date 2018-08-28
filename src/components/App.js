import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Filters from './Filters';
import UserForm from './UserForm';
import Counter from './Counter';
import Articles from './routes/Articles';
import Comments from './routes/Comments';
import NotFound from './routes/NotFound';
// import ErrorBoundary from './ErrorBoundary';
import { Route, Switch, NavLink } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

export const UserContext = React.createContext();

class App extends React.Component {
  state = { username: '' };

  render() {
    return (
      <ConnectedRouter history={history}>
        <UserContext.Provider
          value={{
            state: this.state,
            handleUserChange: username => this.setState({ username })
          }}
        >
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
            <UserForm
            // value={this.state.username}
            // onChange={this.handleUserChange}
            />
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
        </UserContext.Provider>
      </ConnectedRouter>
    );
  }

  handleUserChange = username => this.setState({ username });
}

export default App;
