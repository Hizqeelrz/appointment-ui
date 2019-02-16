import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import AppointmentForm from './AppointmentForm';
import NavBar from "./NavBar";

class Appointments extends React.Component {
    state = {
        appointments: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/api/appointments").then(appoi => {
            const appointments = appoi.data.data;
            console.log(appoi.data);
            this.setState({
                appointments
            });
        })
    }
    
    render() {
        return(
					<div>
            <NavBar />            
            <div className="appoin-top-root">
              <span className="appoin-form"> <AppointmentForm /></span>  
              <h2 className="appointment-heading">Appointments Collection</h2>
              <Paper>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell aligh="right">Date</TableCell>
                      <TableCell aligh="right">PatientID</TableCell>
                      <TableCell aligh="right">DoctorID</TableCell>
                      <TableCell aligh="right">StartTime</TableCell>
                      <TableCell aligh="right">EndTime</TableCell>
                      <TableCell aligh="right">Charges</TableCell>
                      <TableCell aligh="right">Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.appointments.map(appointment => (
                      <TableRow key={appointment.id}>
                        <TableCell component="th" scope="row">
                          {appointment.id}
                        </TableCell>
                        <TableCell aligh="right">{appointment.date}</TableCell>
                        <TableCell aligh="right">{appointment.patient_id}</TableCell>
                        <TableCell aligh="right">{appointment.doctor_id}</TableCell>
                        <TableCell aligh="right">{appointment.start_time}</TableCell>
                        <TableCell aligh="right">{appointment.end_time}</TableCell>
                        <TableCell aligh="right">{appointment.charges}</TableCell>
                        <TableCell aligh="right">{appointment.description}</TableCell>
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

export default Appointments;