import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import AppointmentForm from './AppointmentForm';
import NavBar from "./NavBar";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});


class Appointments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        appointments: [],
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
    componentDidMount() {
        axios.get("http://localhost:4000/api/appointments").then(appoi => {
            const appointments = appoi.data.data;
            console.log(appoi.data);
            this.setState({
                appointments
            });
        })
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
  
  
    handleOpen = () => {
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
  
      this.handleOnClose();
      // window.location.reload();
    }

    render() {
      const classes = this.props;
        return(
					<div>
            <NavBar />            
            <div className="appoin-top-root">
              <span className="appoin-form"> <AppointmentForm
                open={this.state.open}
                handleOpen={this.handleOpen}
                handleClose={this.handleClose}
                handleOnClose={this.handleOnClose}
                handleSubmit={this.handleSubmit}
                onChangeDate={this.onChangeDate}
                onChangeCharges={this.onChangeCharges}
                onChangeDescription={this.onChangeDescription}
                onChangeEndTime={this.onChangeEndTime}
                onChangeStartTime={this.onChangeStartTime}
                onChangeDoctorID={this.onChangeDoctorID}
                onChangePatientID={this.onChangePatientID}
               />
               </span>  
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
                      <TableCell></TableCell>
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
                        <TableCell>
                          <Button variant="contained" size="small" color="secondary" className={classes.button}>
                            Delete
                            <DeleteIcon className={classes.rightIcon} />
                          </Button>
                        </TableCell>
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

export default withStyles(styles)(Appointments);