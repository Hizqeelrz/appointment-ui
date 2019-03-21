import React from 'react';
import Axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import DoctorForm from './DoctorForm';
import NavBar from './NavBar';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

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

    async componentDidMount() {
      const response = await Axios.get("http://localhost:4000/api/doctors")
      const  doctors = response.data.data
      console.log(doctors)
      this.setState({
        doctors
      });
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

      const {doctors} = this.state;
  
      const doctor = {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        gender: this.state.gender,
        qualification: this.state.qualification,
        speciality: this.state.speciality
      }

      // const {doctors} = this.state;

      // const doctors = {...doctors, doctor};

      // this.setState({
      //   doctors: doctors
      // })


      const doct = [...doctors, doctor];

      this.setState({
        doctors: doct
      });

      Axios.post("http://localhost:4000/api/doctors", {doctor}).then(doct => {
        console.log(doct);
        console.log(doct.data);
        // console.log(doct.data.data.id);

        // doctor = {id: doct.data.data.id, ...doctor};
      })
      
      // const doctors = [...doctors, doctor];

      // this.setState({
      //   doctors
      // })
  
      this.onClose();
      // window.location.reload();
    }

    handleChangeId = (e) => {
      this.setState({
        id: e.target.value
      });
    }

    // handleDelete = async doctor => {
    //   await Axios.delete(`http://localhost:4000/api/doctors/${doctor.id}`);
    //   const doctors = this.state.doctors.filter(d => d.id !== doctor.id);

    //   console.log(doctor.id);

    //   this.setState({
    //     doctors
    //   });
    // }

    handleDelete = async doctor => {
      /* store the current state in previousDoctor, just in case of server side fail */
       const previousDoctor = this.state.doctors;
    /* optimistically, update on browser side, */
       const doctors = this.state.doctors.filter(d => d.id !== doctor.id);

       this.setState({ 
         doctors
       });
   
    /* server side update.  If any fail, rollback the state */
       try {
        await Axios.delete(`http://localhost:4000/api/doctors/${doctor.id}`);
        } catch (e) {
        this.setState({doctors: previousDoctor});
      }
      console.log("ID: " + doctor.id + " is Deleted Successfully")
   };

    render() {
      const { classes } = this.props;
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
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.doctors.map((doctor, i) => (
                      <TableRow key={i}>
                        <TableCell component="th" scope="row">
                          {doctor.id}
                        </TableCell>
                        <TableCell aligh="right">{doctor.name}</TableCell>
                        <TableCell aligh="right">{doctor.email}</TableCell>
                        <TableCell aligh="right">{doctor.age}</TableCell>
                        <TableCell aligh="right">{doctor.gender}</TableCell>
                        <TableCell aligh="right">{doctor.qualification}</TableCell>
                        <TableCell aligh="right">{doctor.speciality}</TableCell>
                        <TableCell>
                        <Button type="submit" onClick={e => this.handleDelete(doctor, i)} variant="contained" size="small" color="secondary" className={classes.button}>
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

export default withStyles(styles)(Doctors);