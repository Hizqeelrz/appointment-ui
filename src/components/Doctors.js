import React from 'react';
import axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Doctors extends React.Component {
    state = {
        doctors: []
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
    
    render() {
        return(
					<div className="top-root">
            New Doctor
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
        )
    }
}

export default Doctors;