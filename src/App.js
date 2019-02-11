import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import Doctors from './components/Doctors';
import NavBar from './components/NavBar';
import Patients from './components/Patients';
import Appointments from './components/Appointments';
import PatientForm from './components/PatientForm';
import AppointmentForm from './components/AppointmentForm';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
