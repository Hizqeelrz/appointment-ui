import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import Doctors from './components/Doctors';
import MenuAppBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <Doctors/>
      </div>
    );
  }
}

export default App;
