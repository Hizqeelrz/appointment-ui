import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link, withRouter} from 'react-router-dom';

import history from "../history";
import AuthService from './AuthService';
const Auth = new AuthService();

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

class NavBar extends React.Component {

  handleLogOut = () => {
    Auth.logOut()
    this.props.history.replace('/login');
  }
  render() {
  const{ classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" color="inherit" className={classes.grow} to="/">
            <Link to="/" style={{ textDecoration: 'none', color: 'unset' }} >
                Appointment
            </Link>
          </Typography>
          <Button color="inherit" component={Link} to={"/doctors"} >Doctors</Button>
          <Button color="inherit" component={Link} to={"/patients"} >Patients </Button>
          <Button color="inherit" component={Link} to={"/appointments"} >Appointments </Button>
          <Button color="inherit" onClick={this.handleLogOut}> SignOut </Button>
        </Toolbar>
      </AppBar>
    </div>
  )};
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));
