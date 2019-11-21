import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import CakeDisplay from './components/CakeDisplay'

class App extends Component {

  render() {
    return (
      <div id="App">
        <CakeContainer />
        <CakeDisplay />
      </div>
    );
  }
}

export default App;
