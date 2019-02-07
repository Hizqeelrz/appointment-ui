import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Doctors from "./Doctors";
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
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

export default Router;