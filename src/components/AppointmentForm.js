import React from 'react';
// eslint-disable-next-line
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class AppointmentForm extends React.Component {

  render() {
    return(
<div>
        <Button variant="outlined" color="primary" onClick={this.props.handleOpen}>
          Add Appointment
        </Button>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Appointment Info</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="app-date"
              label="Date"
              type="date"
              defaultValue="2019-02-14"
              onChange={this.props.onChangeDate}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-patient_id"
              label="PatientID"
              type="number"
              onChange={this.props.onChangePatientID}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-doctor_id"
              label="DoctorID"
              type="number"
              onChange={this.props.onChangeDoctorID}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-start_time"
              label="StartTime"
              type="time"
              defaultValue="13:30"
              onChange={this.props.onChangeStartTime}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-end_time"
              label="EndTime"
              type="time"
              defaultValue="14:00"
              onChange={this.props.onChangeEndTime}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-charges"
              label="Charges"
              type="number"
              onChange={this.props.onChangeCharges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-description"
              label="Description"
              type="text"
              onChange={this.props.onChangeDescription}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={this.props.handleSubmit} color="primary">
              Submit
            </Button>
            <Button onClick={this.props.handleOnClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AppointmentForm;