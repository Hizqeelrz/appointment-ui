import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Router from './components/Router';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
// import { Switch } from '@material-ui/core';
import Login from "./components/Login";
import NavBar from "./components/NavBar";

ReactDOM.render(
      <Router>
        <div>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={Login} exact />
          </Switch>
        </div>
      </Router>,
      document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
