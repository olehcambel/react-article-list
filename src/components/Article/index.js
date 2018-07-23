import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

// import toggleOpen from '../decorators/toggleOpen';
import './style.sass';
import CommentList from '../CommentList';


class Article extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     updateIndex: 0
  //   };
  // }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps.isOpen !== this.props.isOpen;
  // }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return (
      <div>
        <h3> {article.title} </h3>
        <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>

        <ReactCSSTransitionGroup
          transitionName="Article"
          transitionEnterTimeout={550}
          transitionLeaveTimeout={400}
          transitionAppear={true}
          transitionAppearTimeout={500}
          component="div"
        >
          {this.props.isOpen && this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  getBody() {
    // if (!this.props.isOpen) return null;
    const { article } = this.props;
    return (
      <section>
        {article.text} |
        {/* <button
          onClick={() =>
            this.setState({ updateIndex: this.state.updateIndex + 1 })
          }
        >
          {this.state.updateIndex}
        </button> */}
        <h3>creation date: {new Date(article.date).toDateString()} </h3>
        <CommentList
          comments={article.comments}
          // ref={this.setCommentsBoxRef.bind(this)}
          // key={this.state.updateIndex}
        />
      </section>
    );
  }

  // setCommentsBoxRef(ref) {
  //   console.log(findDOMNode(ref));
  //   console.log(ref);
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('---updating', this.props.isOpen, nextProps.isOpen);
  // }

  // componentDidMount() {
  //   console.log('---mounted');
  // }
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func.isRequired
};

Article.defaultProps = {
  article: [
    {
      title: 'none',
      text: 'none',
      comments: []
    }
  ],
  isOpen: false
};

export default Article;
// export default toggleOpen(Article);
