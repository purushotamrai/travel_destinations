import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DestinationList from "./Components/Destination/DestinationList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DestinationList/>
      </div>
    );
  }
}

export default App;
