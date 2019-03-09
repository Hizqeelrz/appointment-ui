import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import AuthService from './AuthService';

 const Auth = new AuthService();

export const ProtectedRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={
      (props) => {
        if(Auth.loggedIn){
          return <Component {...props} /> 
        }
        else {
          return ( <Redirect to={
            {
              pathname: "/login",
              state: {
                from: props.location
              }
            }
          } />
          );
        }
      }
    } />
  )
}