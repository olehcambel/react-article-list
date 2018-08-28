import React, { Component, Fragment } from 'react';
import { UserContext } from './App';

class UserForm extends Component {
  render() {
    return (
      <Fragment>
        <UserContext.Consumer>
          {context => (
            <Fragment>
              <h1>Hello</h1>
              <input
                type="text"
                value={context.state.username}
                onChange={e => context.handleUserChange(e.target.value)}
              />
            </Fragment>
          )}
        </UserContext.Consumer>
      </Fragment>
    );
  }

  handleUserChange = e => {
    this.props.onChange(e.target.value);
  };
}

export default UserForm;
