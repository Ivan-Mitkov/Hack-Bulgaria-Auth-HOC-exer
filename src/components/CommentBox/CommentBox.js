import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment } from "actions";
import requireAuth from "hoc/requireAuth";

import classes from 'components/CommentList/CommentList.module.css'


class CommentBox extends Component {
  state = { comment: "", postsToRender: [] };

  handleChange = event => {
    this.setState({
      comment: {
        body: event.target.value
      }
    },console.log('State: ',this.state.comment));
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submit:", this.state.comment);
    this.props.saveComment(this.state.comment);
    
    this.setState({comment:{
      body:""
    }})
  };
 

  renderComments = () => {
    console.log("props.comments", this.props.comments);
    
    const comments = this.props.comments.map(comment => {
      return (
        <div className={classes.posts} key={comment.id}>
          <div className={classes.title}>{comment.name}</div>
          <div className={classes.body}>{comment.body}</div>
          <hr />
        </div>
      );
    }).slice(0,5);
    this.setState({ postsToRender: comments });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment.body}
          />
          <div>
            <button >Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.renderComments}>
          Fetch Comments
        </button>
        {this.state.postsToRender}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};

const mapDispatchToProps = dispatch => {
  return {
    saveComment: (comment) => dispatch(saveComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(requireAuth(CommentBox));
