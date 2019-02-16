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
    state = {
        patients: []
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
    
    render() {
        return(
					<div>
            <NavBar/>
            <div className="pat-top-root">
              <span className="pat-form"> <PatientForm /></span>
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