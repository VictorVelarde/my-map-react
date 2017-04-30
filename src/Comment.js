import React, {Component} from 'react';
import Avatar from './Avatar';

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <h3>{"Comments from our readers..."}</h3>
        <hr/>
        <div className="UserInfo">
          <Avatar user={this.props.author}/>
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {this.props.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Comment;
