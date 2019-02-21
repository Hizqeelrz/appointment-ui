import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';


class PatientForm extends React.Component {

  render() {
    return(
<div>
        <Button variant="outlined" color="primary" onClick={this.props.clickOpen}>
          Add Patient
        </Button>
        <Dialog
          open={this.props.closing}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Patient Info</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="pat-firstname"
              label="FirstName"
              type="text"
              onChange={this.props.onChangeFirstName}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-lastname"
              label="LastName"
              type="text"
              onChange={this.props.onChangeLastName}
              fullWidth
            />
            <TextField
              margin="dense"
              name="email"
              id="pat-email"
              label="Email Address"
              type="email"
              onChange={this.props.onChangeEmail}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-age"
              label="Age"
              type="number"
              onChange={this.props.onChangeAge}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-gender"
              label="Gender"
              type="text"
              onChange={this.props.onChangeGender}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-address"
              label="Address"
              type="text"
              onChange={this.props.onChangeAddress}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-phone"
              label="Phone"
              type="text"
              onChange={this.props.onChangePhone}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-city"
              label="City"
              type="text"
              onChange={this.props.onChangeCity}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-state"
              label="State"
              type="text"
              onChange={this.props.onChangeState}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={this.props.handleSubmit} color="primary">
              Submit
            </Button>
            <Button onClick={this.props.clickClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

PatientForm.propTypes = {
  clickOpen: PropTypes.func
};

export default PatientForm;