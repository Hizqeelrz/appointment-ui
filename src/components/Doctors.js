import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DoctorForm from './DoctorForm';
import NavBar from './NavBar';

class Doctors extends React.Component {
    state = {
        doctors: [],
        name: '',
        email: '',
        age: '',
        gender: '',
        qualification: '',
        speciality: '',
        open: false,
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/doctors").then(doc => {
            const doctors = doc.data.data;
            console.log(doc.data);
            this.setState({
                doctors
            });
        })
    }

    componentDidUpdate(){

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
  
      this.onClose();
      window.location.reload();
    }

    render() {
        return(
					<div>
            <NavBar />
          <div className="doc-top-root">
            <span className="doc-form"> <DoctorForm
            handleClickOpen={this.handleClickOpen}
            opening={this.state.open}
            handleClose={this.handleClose}
            onClose={this.onClose}
            handleSubmit={this.handleSubmit}
            onChangeName={this.onChangeName}
            onChangeAge={this.onChangeAge}
            onChangeEmail={this.onChangeEmail}
            onChangeGender={this.onChangeGender}
            onChangeQualification={this.onChangeQualification}
            onChangeSpecilaity={this.onChangeSpecilaity}
            />
            </span>  
						<h2 className="doctor-heading">Doctors Collection</h2>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell aligh="right">Name</TableCell>
                      <TableCell aligh="right">Email</TableCell>
                      <TableCell aligh="right">Age</TableCell>
                      <TableCell aligh="right">Gender</TableCell>
                      <TableCell aligh="right">Qualification</TableCell>
                      <TableCell aligh="right">Speciality</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.doctors.map(doctor => (
                      <TableRow key={doctor.id}>
                        <TableCell component="th" scope="row">
                          {doctor.id}
                        </TableCell>
                        <TableCell aligh="right">{doctor.name}</TableCell>
                        <TableCell aligh="right">{doctor.email}</TableCell>
                        <TableCell aligh="right">{doctor.age}</TableCell>
                        <TableCell aligh="right">{doctor.gender}</TableCell>
                        <TableCell aligh="right">{doctor.qualification}</TableCell>
                        <TableCell aligh="right">{doctor.speciality}</TableCell>
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

export default Doctors;