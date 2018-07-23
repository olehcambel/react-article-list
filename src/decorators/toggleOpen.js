import React, { Component } from 'react';

export default OriginalComponent =>
  class ToggleOpenWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };

      this.toggleOpen = this.toggleOpen.bind(this)
    }

    componentDidMount() {
      // console.log('mounted')
    }

    componentDidUpdate() {
      // console.log('updating')
    }

    render() {
      return (
        <OriginalComponent
          toggleOpen={this.toggleOpen}
          {...this.state}
          {...this.props}
        />
      );
    }

    toggleOpen() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  };
