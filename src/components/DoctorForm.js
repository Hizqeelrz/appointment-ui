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

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      age: '',
      gender: '',
      qualification: '',
      speciality: '',
      open: false,
    }
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
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

  onChangeQualification = (e) => {
    this.setState({
      qualification: e.target.value
    })
  }

  onChangeSpecilaity = (e) => {
    this.setState({
      speciality: e.target.value
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

    const doctor = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      gender: this.state.gender,
      qualification: this.state.qualification,
      speciality: this.state.speciality
    }

    axios.post("http://localhost:4000/api/doctors", {doctor}).then(doct => {
      console.log(doct);
      console.log(doct.data);
    })


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
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
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
              onChange={this.onChangeName}
              fullWidth
            />
            <TextField
              margin="dense"
              name="email"
              id="doc-email"
              label="Email Address"
              type="email"
              onChange={this.onChangeEmail}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-age"
              label="Age"
              type="number"
              onChange={this.onChangeAge}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-gender"
              label="Gender"
              type="text"
              onChange={this.onChangeGender}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-qualification"
              label="Qualification"
              type="text"
              onChange={this.onChangeQualification}
              fullWidth
            />
            <TextField
              margin="dense"
              id="doc-speciality"
              label="Speciality"
              type="text"
              onChange={this.onChangeSpecilaity}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" onClick={this.handleSubmit} onClose={this.handleClose} color="primary">
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

export default DoctorForm;