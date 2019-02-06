import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import DoctorForm from './components/DoctorForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DoctorForm/>
      </div>
    );
  }
}

export default App;
