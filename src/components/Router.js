import React from 'react';

import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import Doctors from "./Doctors";
import Patients from "./Patients";
import Appointments from "./Appointments";
import DoctorForm from './DoctorForm';
import '../App.css';
import App from '../App';
import NavBar from './NavBar';
import Error from './Error';
import Login from './Login';

import {ProtectedRoute} from './ProtectedRoute';

const Router = () => {
  return(
  <BrowserRouter>
    <div>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/login" component={Login} exact />
        <ProtectedRoute path="/" component={App} exact />
        <ProtectedRoute path="/doctors" component={Doctors} />
        <ProtectedRoute path="/patients" component={Patients} />
        <ProtectedRoute path="/appointments" component={Appointments} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default Router;