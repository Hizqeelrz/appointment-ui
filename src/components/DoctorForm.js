import React from 'react';
// eslint-disable-next-line
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class DoctorForm extends React.Component {

  render() {
    return(
<div>
        <Button variant="outlined" color="primary" onClick={this.props.handleClickOpen}>
          Add Doctor
        </Button>
        <Dialog
          open={this.props.opening}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Doctor Info</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="doc-name"
              label="Name"
              type="text"
              onChange={this.props.onChangeName}
              fullWidth
            />
            <TextField
              margin="dense"
              name="email"
              id="doc-email"
              label="Email Address"
              type="email"
              onChange={this.props.onChangeEmail}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-age"
              label="Age"
              type="number"
              onChange={this.props.onChangeAge}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-gender"
              label="Gender"
              type="text"
              onChange={this.props.onChangeGender}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-qualification"
              label="Qualification"
              type="text"
              onChange={this.props.onChangeQualification}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-speciality"
              label="Speciality"
              type="text"
              onChange={this.props.onChangeSpecilaity}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={this.props.handleSubmit} color="primary">
              Submit
            </Button>
            <Button onClick={this.props.onClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DoctorForm;