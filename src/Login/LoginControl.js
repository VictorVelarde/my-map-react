import React, {Component} from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
      message: "You are not loggedIn"
    };
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true, message: "You are loggedIn!"});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false, message: "You are not loggedIn"});
  }

  render() {
    let button = (this.state.isLoggedIn)
      ? <LogoutButton onClick={this.handleLogoutClick}/>
      : <LoginButton onClick={this.handleLoginClick}/>;

    const textStyle = {
      'textAlign': 'right',
      'top': '10px',
      'color': 'white',
      'position': 'absolute',
      'right': '20px'
    };

    return (
      <div>
        <h5 style={textStyle}>{this.state.message} {button}
        </h5>
      </div>
    );
  }
}

export default LoginControl;
