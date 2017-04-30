import React, {Component} from 'react';
import logo from './logo.svg';
import Comment from './Comment';
import Menu from './Menu';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import LoginControl from './Login/LoginControl';
import NewsList from './NewsList';
import './App.css';

const comment = {
  date: new Date(),
  text: "Hey ho, let's go!",
  author: {
    name: 'Joey Ramone',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1>my-map-react</h1>
          <p className="App-intro">
            A little app with React
          </p>

          <LoginControl/>
          <Menu entries={[
            {
              id: 1,
              text: "Home"
            }, {
              id: 2,
              text: "Map"
            }
          ]}/>
        </div>
        <div className="App-body">
          <Clock/>
          <NewsList news={['aaaaa', 'bbbbb', 'ccccc']}/>
          <Comment date={comment.date} text={comment.text} author={comment.author}/>
          <ToggleButton/>
        </div>

      </div>
    )
  }
}

export default App;
