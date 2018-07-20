import React, { Component } from 'react';

export default PureComponent =>
  class accordion extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentItemId: null
      };

      this.accordion = this.accordion.bind(this);
    }

    render() {

      return (
        <PureComponent
          {...this.props}
          accordion={this.accordion}
          currentItemId={this.state.currentItemId}
        />
      );
    }

    accordion(articleId) {

      this.setState({
        currentItemId: this.state.currentItemId === articleId ? null : articleId
      });
    }
  };
