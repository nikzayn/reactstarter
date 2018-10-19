import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Practice
          </p>
          <a
            className="App-link"
            href="https://www.github.com/nikzayn"
            target="_blank"
            rel="noopener noreferrer"
          ><button className = "contact">
            Contact Me</button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
