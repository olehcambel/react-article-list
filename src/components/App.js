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
import translate from '../translate';

import { LocalizationProvider } from './localizationContext';

export const UserContext = React.createContext();

class App extends React.Component {
  state = { username: '', lang: 'ru' };

  render() {
    return (
      <ConnectedRouter history={history}>
        <LocalizationProvider translate={translate(this.state.lang)}>
          <UserContext.Provider
            value={{
              state: this.state,
              handleUserChange: username => this.setState({ username })
            }}
          >
            <Fragment>
              <div>
                <button
                  onClick={() =>
                    this.setState({
                      lang: this.state.lang === 'ru' ? 'eng' : 'ru'
                    })
                  }
                >
                  Change Language
                </button>
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
                <Route path="/articles" component={Articles} />
                <Route path="/comments" component={Comments} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Fragment>
          </UserContext.Provider>
        </LocalizationProvider>
      </ConnectedRouter>
    );
  }

  handleUserChange = username => this.setState({ username });
}

export default App;
