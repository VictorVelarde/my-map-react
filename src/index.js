import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const element = <div>
    <h1>Hey, ho! Let's go!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>;

ReactDOM.render(
    <App/>, document.getElementById('root'));

//setInterval(renderApp, 1000);
