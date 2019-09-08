import React, { Component } from 'react';
import StudentAddForm from './StudentAddForm';

class DepartmentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentName: "Pre-Unversity",
            collegeName: "PESIT",
        }
    }

    render() {
        return (
            <div style={{ border: "5px solid red" }}>
                <h4>Department No: {this.props.deptNumber}</h4>
                <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>

                <StudentAddForm {...this.props} />

            </div>
        );
    }
}

export default DepartmentContainer;