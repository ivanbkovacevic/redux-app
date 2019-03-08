import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Compo1 from "./components/Compo1"
import Compo2 from "./components/Compo2"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
        header
        </header>
        <Compo1/>
        <Compo2/>
      </div>
    );
  }
}

export default App;
