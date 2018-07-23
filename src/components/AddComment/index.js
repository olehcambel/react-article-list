import React, { Component } from 'react';

import './index.sass';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageField: '',
      nameField: '',
      isError: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { messageField, nameField, isError } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <legend>Оставить коммент</legend>
        <input
          className={isError ? 'error' : 'passed'}
          value={nameField}
          onChange={this.checkName.bind(this, validate.name)}
        />
        <input
          className={isError ? 'error' : 'passed'}
          value={messageField}
          onChange={this.checkMessage.bind(this, validate.message)}
        />
        {isError && <div>ERROR 404</div>}

        <input disabled={isError} type="submit" value="Create" />
      </form>
    );
  }

  checkName(limit, event) {
    this.handleValidator(limit.from, limit.to, event.target.value.length);

    this.setState({ nameField: event.target.value });
  }

  checkMessage(limit, event) {
    this.handleValidator(limit.from, limit.to, event.target.value.length);

    this.setState({ messageField: event.target.value });
  }

  handleValidator(from, to, length) {
    this.setState({ isError: false });
    if (from > length || length > to) {
      this.setState({ isError: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.message);
  }
}

const validate = {
  name: { from: 5, to: 15 },
  message: { from: 20, to: 40 }
};

export default AddComment;
