import React, { Component } from 'react';
import './App.css';
import Hello from './hello/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello friend="Woo" />
      </div>
    );
  }
}

export default App;
