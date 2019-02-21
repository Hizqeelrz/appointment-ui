import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import PatientForm from './PatientForm';
import NavBar from './NavBar';

class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        patients: [],
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

    componentDidMount() {
        axios.get("http://localhost:4000/api/patients").then(pat => {
            const patients = pat.data.data;
            console.log(pat.data);
            this.setState({
                patients
            });
        })
    }

    componentWillUpdate() {

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

    handleOnClose = () => {
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
  
      this.handleOnClose();
    }
    
    render() {
        return(
					<div>
            <NavBar/>
            <div className="pat-top-root">
              <span className="pat-form"> <PatientForm 
                onChangeFirstName={this.onChangeFirstName}
                onChangeLastName={this.onChangeLastName}
                onChangeEmail={this.onChangeEmail}
                onChangeAge={this.onChangeAge}
                onChangeAddress={this.onChangeAddress}
                onChangeGender={this.onChangeGender}
                onChangePhone={this.onChangePhone}
                onChangeState={this.onChangeState}
                onChangeCity={this.onChangeCity}
                clickClose={this.handleOnClose}
                closing={this.state.open}
                clickOpen={this.handleClickOpen}
                handleClose={this.handleClose}
                handleSubmit={this.handleSubmit}
              />
              </span>
              <h2 className="patient-heading">Patients Collection</h2>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell aligh="right">FirstName</TableCell>
                      <TableCell aligh="right">LastName</TableCell>
                      <TableCell aligh="right">Age</TableCell>
                      <TableCell aligh="right">Gender</TableCell>
                      <TableCell aligh="right">Address</TableCell>
                      <TableCell aligh="right">Phone</TableCell>
                      <TableCell aligh="right">City</TableCell>
                      <TableCell aligh="right">State</TableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.patients.map(patient => (
                      <TableRow key={patient.id}>
                        <TableCell component="th" scope="row">
                          {patient.id}
                        </TableCell>
                        <TableCell aligh="right">{patient.firstname}</TableCell>
                        <TableCell aligh="right">{patient.lastname}</TableCell>
                        <TableCell aligh="right">{patient.age}</TableCell>
                        <TableCell aligh="right">{patient.gender}</TableCell>
                        <TableCell aligh="right">{patient.address}</TableCell>
                        <TableCell aligh="right">{patient.phone}</TableCell>
                        <TableCell aligh="right">{patient.city}</TableCell>
                        <TableCell aligh="right">{patient.state}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>  
            </div>
					</div>	
        )
    }
}

export default Patients;