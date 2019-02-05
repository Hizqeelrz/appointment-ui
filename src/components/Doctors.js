import React from 'react';
import axios from 'axios';

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
            <div>
                {this.state.doctors.map(doctor => 
                    <div key={doctor.id}>
                        <li>{doctor.name}</li>
                        <li>{doctor.age}</li>
                        <li>{doctor.gender}</li>
                    </div>
                    )}
            </div>    
        )
    }
}

export default Doctors;