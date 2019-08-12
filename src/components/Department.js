import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentName: "Pre-Unversity",
            collegeName: "PESIT"
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.addStudentClicked = this.addStudentClicked.bind(this);
        this.stdName = '';
    }

    onNameChange(event) {
        console.log("Changed Value: ", event.target.value);
        this.stdName = event.target.value;
    }

    addStudentClicked(event) {
        this.props.addStudent(this.stdName);
    }

    render() {
        console.log("Department -> render()");
        return (
            <div>
                <h4>Department No: {this.props.deptNumber}</h4>
                <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>
                Student Name: <input type="text" onChange={this.onNameChange} />
                <button onClick={this.addStudentClicked}>Add</button>
            </div>
        );
    }
}

Department.propTypes = {
    addStudent: PropTypes.func.isRequired,
    deptNumber: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string
    ]).isRequired
}

export default Department;