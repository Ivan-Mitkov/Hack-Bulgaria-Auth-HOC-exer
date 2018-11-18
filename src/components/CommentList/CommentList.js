import React, { Component } from "react";
import { connect } from "react-redux";
import { asyncFetchComments } from "actions/index";

import classes from 'components/CommentList/CommentList.module.css'

class CommentList extends Component {
  componentDidMount() {
    if (this.props.comments.length === 0) {
      // console.log("CDM take comments");
      this.props.fetchComments();
    }
  }
  componentDidUpdate() {
    console.log("Comments CDU");
  }

  renderComments() {
    const comments = this.props.comments;

    if (comments.length > 0) {
      return comments.map(comment => {
        return (
          <div className={classes.posts} key={comment.id}>
            <div className={classes.title}>{comment.name}</div>
            <div className={classes.body}>{comment.body}</div>
           
          </div >
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h4 className={classes.mainTitle}>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}
const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(asyncFetchComments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
