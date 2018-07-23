import React, { Component } from 'react';

export default OriginalComponent =>
  class AccordionWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentItemId: this.props.defaultOpenId
      };

      this.accordion = this.accordion.bind(this);
    }

    render() {
      return (
        <OriginalComponent
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
