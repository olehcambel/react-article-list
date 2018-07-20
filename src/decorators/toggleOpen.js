import React, { Component } from 'react';

export default PureComponent =>
  class WrapperToggleOpen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
    }

    render() {
      return (
        <PureComponent
          toggleOpen={this.toggleOpen.bind(this)}
          {...this.state}
          {...this.props}
        />
      );
    }

    toggleOpen() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
