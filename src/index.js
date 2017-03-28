import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//const element = <App />;

function renderApp(){
  const element = <div>
    <h1>Hey, ho! Let's go!</h1>
     <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>;

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(renderApp, 1000);
