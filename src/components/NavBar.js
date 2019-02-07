import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

function NavBar(props) {
  const { classes } = props;
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
          <Button color="inherit" >Patients </Button>
          <Button color="inherit" >Appointments </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
