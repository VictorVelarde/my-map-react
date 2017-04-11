import React, {Component} from 'react';

class ToggleButton extends Component {
    h
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }));
    }

    render() {
        return <div>
            <button onClick={this.handleClick}>I am {this.state.isToggled
                    ? "ON"
                    : "OFF"}</button>
        </div>
    }
}

export default ToggleButton;
