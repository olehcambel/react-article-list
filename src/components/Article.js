import React, { Component } from 'react';
import { render } from 'react-dom';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
    // this.setState(prevState => ({
    //   isOpen: !prevState.isOpen
    // }));
  }

  getBody() {
    // const body = this.state.isOpen && <section>{article.text}</section>;
    if (!this.state.isOpen) return null;
    const { article } = this.props;
    return <section>{article.text}</section>;
  }

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <h3> {article.title} </h3>
        <button onClick={this.toggleOpen.bind(this)}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
        <h3>creation date: {new Date(article.date).toDateString()} </h3>
      </div>
    );
  }
}

export default Article;
