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

  constructor(props) {
    super(props);

    this.state = {
      date: '',
      patient_id: '',
      doctor_id: '',
      start_time: '',
      end_time: '',
      charges: '',
      description: '',
      open: false,
    }
  }

  onChangeDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  onChangePatientID = (e) => {
    this.setState({
      patient_id: e.target.value
    })
  }

  onChangeDoctorID = (e) => {
    this.setState({
      doctor_id: e.target.value
    })
  }

  onChangeStartTime = (e) => {
    this.setState({
      start_time: e.target.value
    })
  }

  onChangeEndTime = (e) => {
    this.setState({
      end_time: e.target.value
    })
  }

  onChangeCharges = (e) => {
    this.setState({
      charges: e.target.value
    })
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      date: this.state.date,
      patient_id: this.state.patient_id,
      doctor_id: this.state.doctor_id,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      charges: this.state.charges,
      description: this.state.description
    }

    axios.post("http://localhost:4000/api/appointments", {appointment}).then(appoi => {
      console.log(appoi);
      console.log(appoi.data);
    })

    this.onClose();
  }
  // state = {
  //   name: '',
  //   email: '',
  //   age: '',
  //   gender: '',
  //   qualification: '',
  //   speciality: ''
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     postDoctor: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   const doctor = {
  //     postDoctor: this.state.postDoctor
  //   }
  // }



  render() {
    return(
<div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Appointment
        </Button>
        <Dialog
          open={this.state.open}
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
              onChange={this.onChangeDate}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-patient_id"
              label="PatientID"
              type="number"
              onChange={this.onChangePatientID}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-doctor_id"
              label="DoctorID"
              type="number"
              onChange={this.onChangeDoctorID}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-start_time"
              label="StartTime"
              type="time"
              defaultValue="13:30"
              onChange={this.onChangeStartTime}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-end_time"
              label="EndTime"
              type="time"
              defaultValue="14:00"
              onChange={this.onChangeEndTime}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-charges"
              label="Charges"
              type="number"
              onChange={this.onChangeCharges}
              fullWidth
            />
            <TextField
              margin="dense"
              id="app-description"
              label="Description"
              type="text"
              onChange={this.onChangeDescription}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
            <Button onClick={this.onClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AppointmentForm;