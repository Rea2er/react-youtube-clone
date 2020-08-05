import React, { Component } from "react";
import CommentsHeader from "./CommentsHeader/CommentsHeader";
import AddComment from "./AddComment/AddComment";
import Comment from "./Comment/Comment";

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        <CommentsHeader amountComments={this.props.amountComments} />
        <AddComment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}
export default Comments;
