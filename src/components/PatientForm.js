import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


class PatientForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      age: '',
      gender: '',
      address: '',
      phone: '',
      city: '',
      state: '',
      open: false,
    }
  }

  onChangeFirstName = (e) => {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeLastName = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangeAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }

  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeCity = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  onChangeState = (e) => {
    this.setState({
      state: e.target.value
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

    const patient = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address,
      phone: this.state.phone,
      city: this.state.city,
      state: this.state.state
    }

    axios.post("http://localhost:4000/api/patients", {patient}).then(pat => {
      console.log(pat);
      console.log(pat.data);
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
          Add Patient
        </Button>
        <Dialog
          open={this.state.open}
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
              onChange={this.onChangeFirstName}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-lastname"
              label="LastName"
              type="text"
              onChange={this.onChangeLastName}
              fullWidth
            />
            <TextField
              margin="dense"
              name="email"
              id="pat-email"
              label="Email Address"
              type="email"
              onChange={this.onChangeEmail}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-age"
              label="Age"
              type="number"
              onChange={this.onChangeAge}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-gender"
              label="Gender"
              type="text"
              onChange={this.onChangeGender}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-address"
              label="Address"
              type="text"
              onChange={this.onChangeAddress}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-phone"
              label="Phone"
              type="text"
              onChange={this.onChangePhone}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-city"
              label="City"
              type="text"
              onChange={this.onChangeCity}
              fullWidth
            />
            <TextField
              margin="dense"
              id="pat-state"
              label="State"
              type="text"
              onChange={this.onChangeState}
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

export default PatientForm;