import React, { Component, Fragment } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleUserChange = this.handleUserChange.bind(this);

  }

  render() {
    return (
      <Fragment>
        <h1>Hello</h1>{' '}
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUserChange}
        />
      </Fragment>
    );
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value });
  }
}

export default UserForm;
