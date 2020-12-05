import React,{ Component,useState,useEffect }  from 'react';
import "../index.css";

class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input id="input" name="Author" placeholder="Name" required ref={(input) => this._author = input}></input><br />
            <textarea name="Descriptions" placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">Post Comment</button>
          </div>
        </form>
      );
    } 
    
    _handleSubmit(event) { 
      event.preventDefault();   
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } 
  
export default CommentForm;