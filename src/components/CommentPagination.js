import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from './Loader';
import Comment from './Comment';
import { commentLoadPerPage } from '../AC';

class CommentPagination extends Component {
  state = {};

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;

    return <div>{this.getComments()}</div>;
  }

  componentDidMount() {
    const { commentLoadPerPage, page } = this.props;
    commentLoadPerPage(page);
  }

  getComments() {
    const { comments } = this.props;
    if (!comments) return <Loader />;
    debugger;
    return (
      <ul>
        {comments.map(id => (
          <Comment key={id} id={id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state, { page }) => {
  const { pagination } = state.comments;

  return {
    comments: pagination.getIn([page, 'ids']),
    loading: pagination.getIn([page, 'loading'])
  };
};

export default connect(
  mapStateToProps,
  { commentLoadPerPage }
)(CommentPagination);
