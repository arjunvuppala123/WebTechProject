import React  from 'react';
import "../index.css";

class Comment extends React.Component {
  render () {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">- {this.props.body}</p>
      </div>
    );
  }
}

export default Comment;