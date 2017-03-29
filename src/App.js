import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Menu (props){
  return(
    <ul className="Menu">
      { props.entries.map(e => <li><a href="#">{e}</a></li>) }
    </ul>);
  }
/*
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>my-map-react</h1>
        </div>
        <p className="App-intro">
          A little app with React
        </p>
      </div>
    );
  }
}

export default App;
