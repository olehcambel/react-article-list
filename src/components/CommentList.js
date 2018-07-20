import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: false
    };
  }

  render() {
    debugger;
    const { comments } = this.props;
    const { showComment } = this.state;
    const commentElements =
      showComment &&
      comments
        .slice()
        .map(comment => <Comment key={comment.id} comment={comment} />);

    const noButton = comments ? (
      <button onClick={this.handleToggleComment.bind(this)}>
        {showComment ? 'close comment' : 'show comments'}
      </button>
    ) : null;

    return (
      <div>
        {noButton}
        {commentElements}
      </div>
    );
  }

  handleToggleComment() {
    this.setState({ showComment: !this.state.showComment });
  }
}

// handleToggleComment() {
//   this.setState({ showComments: !this.state.showComments });
// }

// let articleComments;
//     if (showComments) {
//       articleComments =
//         article.comments &&
//         article.comments.map(comment => {
//           return (
//             <ul key={comment.id}>
//               <li>
//                 {comment.text} <b> by {comment.user}</b>
//               </li>
//             </ul>
//           );
//         });
//     }

//     <button onClick={this.handleToggleComment.bind(this)}>
//           {showComments ? 'close comment' : 'show comments'}
//         </button>
//         {articleComments}

export default CommentList;
