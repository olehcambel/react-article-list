import React, { Component } from 'react';

export default OriginalComponent =>
  class ToggleOpenWrapper extends Component {
    state = {
      isOpen: true
    };

    render() {
      return (
        <OriginalComponent
          toggleOpen={this.toggleOpen}
          {...this.state}
          {...this.props}
        />
      );
    }

    toggleOpen = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
  };
