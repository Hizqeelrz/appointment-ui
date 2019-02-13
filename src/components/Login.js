import React from 'react';
import axios from 'axios';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Login extends React.Component {

  state = {
    users: [],
    email: "",
    password: ""
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }


  // accountSignIn = (userInfo) => {
  //     return async dispatch => {
  //     try {
  //         const resp = await axios.post(`http://localhost:4000/api/sign_in`, userInfo);
  //         console.log(resp);
  //         localStorage.setItem('token', resp.data.token);
  //         dispatch({ type: "sign_in" });
  //     } catch(err){
  //         console.log('Error Signing In:', err.message);
  //     }
  //     }
  // }

  handleSignIn = (e) => {
    e.preventDefault();
    const use = {
      email: this.state.email,
      password: this.state.password
    }

      try {
          const resp = axios.post(`http://localhost:4000/api/sign_in`, use).then(auth => {
            console.log(auth);
          localStorage.setItem('token', auth.data.token);
          });
          console.log(resp);
          localStorage.setItem('token', resp.data.token);
      } catch(err){
          console.log('Error Signing In:', err.message);
      }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="login-form">
        <FormControl>
          <FormGroup className="login-form">
            <TextField
              autoFocus
              margin="dense"
              name="email"
              id="pat-email"
              label="Email"
              className={classes.textField}
              type="email"
              onChange={this.onChangeEmail}
              fullWidth
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className={classes.textField}
              margin="dense"
              onChange={this.onChangePassword}
              fullWidth
            />

            <span className="login-btn">
              <Button type="submit" color="primary" onClick={this.handleSignIn}>
                LogIn
              </Button>
            </span>
          </FormGroup>
        </FormControl>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);