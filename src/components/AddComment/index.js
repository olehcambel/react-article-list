import React, { Component } from 'react';

import './style.sass';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: '',
      isError: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { message, user, isError } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Оставить коммент</p>
        Name:<input
          className={this.toggleClassName('user')}
          value={user}
          onChange={this.handleChange.bind(this, 'user')}
        />
        Message:<input
          className={this.toggleClassName('message')}
          value={message}
          onChange={this.handleChange.bind(this, 'message')}
        />
        <br />
        <input disabled={isError} type="submit" value="Create" />
      </form>
    );
  }

  toggleClassName(type) {
    const length = this.state[type].length;
    let isOk = this.handleValidator(length, type);

    return isOk ? 'passed' : 'error';
  }

  handleChange(type, event) {
    this.setState({
      [type]: event.target.value
    });
  }

  handleValidator(length, type) {
    const from = validate[type].from;
    const to = validate[type].to;
    return (from < length) & (length < to);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ user: '', message: '' });
  }
}

const validate = {
  user: { from: 5, to: 15 },
  message: { from: 20, to: 40 }
};

export default AddComment;
