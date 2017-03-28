import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Menu (props){
  const entries = () => props.entries.map(e => <li>{e}</li>);
  console.log(entries);
  return(
    <ul>
      {entries()}
    </ul>);
  }


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Menu entries={["Home", "Map", "About"]}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
