import React, {Component} from 'react';
import Avatar from './Avatar';

class Menu extends Component {
    render() {
        return (
            <div className="Comment">
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

export default Menu;
