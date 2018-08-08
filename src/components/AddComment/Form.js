import React, { Component } from 'react';
import './style.css';
import { FormErrors } from './FormErrors';
import debounce from 'lodash/debounce';

export default class Form extends Component {
  validateFieldThrottle = debounce(this.validateField, 450);
  state = {
    user: '',
    message: '',
    formErrors: { user: '', message: '' },
    userValid: false,
    messageValid: false,
    formValid: false
  };

  render() {
    const { user, message, formErrors, formValid } = this.state;

    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        {/* <form className="commentForm" onSubmit={e => e.preventDefault()}> */}
        <h2>Leave the comment</h2>
        <div className="form__panel">
          <FormErrors formErrors={formErrors} />
        </div>
        <div className="form-group">
          <label htmlFor="user">Name:</label>
          <input
            onChange={this.handleUserInput}
            value={user}
            name="user"
            type="text"
            className={`form__input${this.errorClass(formErrors.user)}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            onChange={this.handleUserInput}
            value={message}
            name="message"
            className={`form__area${this.errorClass(formErrors.message)}`}
          />
        </div>
        <input
          type="submit"
          className={`form__submit${!formValid ? '-error' : ''}`}
          disabled={!formValid}
          value="Send"
        />
      </form>
    );
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateFieldThrottle(name, value);
    });
  };

  validateField(fieldName, value) {
    let { formErrors, userValid, messageValid } = this.state;

    switch (fieldName) {
      case 'user':
        userValid = value.match(/^[a-z0-9]{2,8}$/gi);
        formErrors.user = userValid ? '' : ' should be [a-z0-9]{2-8}';
        break;
      case 'message':
        messageValid = value.match(/^[\S\s]{5,40}$/i);
        formErrors.message = messageValid ? '' : ' should be [5,40]';
        break;
      default:
        break;
    }
    this.setState({ formErrors, userValid, messageValid }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.userValid && this.state.messageValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? '' : '-error';
  }

  handleSubmit = e => {
    e.preventDefault();
    // or to pass only value from each element #comment ?
    this.props.onSaveComment(e.target.elements);

    this.setState({
      user: '',
      message: '',
      formErrors: { user: '', message: '' },
      userValid: false,
      messageValid: false,
      formValid: false
    });
  };
}
