import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Doctors from "./Doctors";
import Patients from "./Patients";
import Appointments from "./Appointments";
import DoctorForm from './DoctorForm';
import '../App.css';
import App from '../App';
import NavBar from './NavBar';
import Error from './Error';


const Router = () => {
  return(
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/doctors" component={Doctors} />
        <Route path="/patients" component={Patients} />
        <Route path="/appointments" component={Appointments} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default Router;