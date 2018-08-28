import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from './Loader';
import Comment from './Comment';
import { commentLoadPerPage } from '../AC';
import { NavLink } from 'react-router-dom';

class CommentPagination extends Component {
  state = {};

  render() {
    const { total } = this.props;
    if (!total) return <Loader />;

    return (
      <div>
        {this.getComments()}
        {this.getLinkPages()}
      </div>
    );
  }

  componentDidMount() {
    const { commentLoadPerPage, page, limit } = this.props;
    commentLoadPerPage(page, limit);
  }

  componentDidUpdate() {
    const { commentLoadPerPage, page, limit } = this.props;
    commentLoadPerPage(page, limit);
  }

  getComments() {
    const { comments, loading } = this.props;
    if (!comments || loading) return <Loader />;

    return (
      <ul>
        {comments.map(id => (
          <Comment key={id} id={id} />
        ))}
      </ul>
    );
  }

  getLinkPages() {
    const { total, limit } = this.props;
    const links = [];
    for (let i = 1; i <= Math.floor(total - 1) / limit + 1; i++) {
      links.push(
        <li key={i}>
          <NavLink to={`/comments/${i}`} activeStyle={{ color: 'lightblue' }}>
            page {i}
          </NavLink>
        </li>
      );
    }
    return <ul>{links}</ul>;
  }
}

const mapStateToProps = (state, { page }) => {
  const { pagination, total } = state.comments;

  return {
    total,
    comments: pagination.getIn([page, 'ids']),
    loading: pagination.getIn([page, 'loading'])
  };
};

export default connect(
  mapStateToProps,
  { commentLoadPerPage }
)(CommentPagination);
