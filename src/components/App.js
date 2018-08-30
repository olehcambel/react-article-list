import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Filters from './Filters';
import UserForm from './UserForm';
import Counter from './Counter';
import Articles from './routes/Articles';
import Comments from './routes/Comments';
import NotFound from './routes/NotFound';
// import ErrorBoundary from './ErrorBoundary';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';
import translate from '../translate';
import LinkRoutes from './LinkRoutes';

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
                <button onClick={this.handleLangChange} name="ru">
                  Russian
                </button>
                <button onClick={this.handleLangChange} name="eng">
                  English
                </button>
                <h2>Main menu</h2>
                <LinkRoutes to="/counter" title="Counter" />
                <LinkRoutes to="/filters" title="Filters" />
                <LinkRoutes to="/articles" title="ArticleList" />
                <LinkRoutes to="/comments" title="Comments" />
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

  handleLangChange = ({ target }) => {
    this.setState({
      lang: target.name
    });
  };

  handleUserChange = username => this.setState({ username });
}

export default App;
