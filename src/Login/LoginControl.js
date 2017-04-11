import React, {Component} from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends Component {
    constructor(props) {
        super(props);

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        let button = (this.state.isLoggedIn)
            ? <LogoutButton onClick={this.handleLogoutClick}/>
            : <LoginButton onClick={this.handleLoginClick}/>;
        return (
            <div>
                <h5>I am the LoginControl, dude! {button}
                </h5>
            </div>
        );
    }
}

export default LoginControl;
