import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment } from '../AC';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };
  state = {};

  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }

  handleIncrement = e => {
    this.props.increment();
  };
}

export default connect(
  state => ({
    counter: state.count
  }),
  { increment }
)(Counter);
