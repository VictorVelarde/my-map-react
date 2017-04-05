import React, {Component} from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount(){
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick(){
      this.setState({date: new Date()});
    }

    componentWillUnmount(){
      clearInterval(this.timerID);
    }

    render() {
        return (
          <div className="Clock">
            <h1>Hello!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
          </div>
        );
    }
}

export default Clock;
