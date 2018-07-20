import React, { Component } from 'react';
import { render } from 'react-dom';

import CommentList from './CommentList';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
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

    // const body = isOpen && (
    //   <section className="card-text">{article.text}</section>
    // );

    return (
      <div>
        <h3> {article.title} </h3>
        <button onClick={this.toggleOpen.bind(this)}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
        <h3>creation date: {new Date(article.date).toDateString()} </h3>

        <CommentList comments={article.comments} />
      </div>
    );
  }
}

export default Article;
