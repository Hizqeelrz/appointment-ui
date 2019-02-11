import React from 'react';
import Axios from 'axios';

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
    users: []
  }

  // componentDidMount() {
  //   Axios.get('http://localhost:4000/api/users').then(user => {
  //     const users = user.data;

  //     this.setState({
  //       users
  //     })
  //   })
  // }

  render() {
    const { classes } = this.props;
    return (
      <div className="login-form">
        <FormControl>
          <FormGroup className="login-form">
            <TextField
              margin="dense"
              name="email"
              id="pat-email"
              label="Email"
              className={classes.textField}
              type="email"
              fullWidth
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              className={classes.textField}
              margin="dense"
              fullWidth
            />

            <Button type="submit" color="primary">
              LogIn
            </Button>
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