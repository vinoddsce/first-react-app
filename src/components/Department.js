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
        this.onCourseChange = this.onCourseChange.bind(this);
        this.onFeesChange = this.onFeesChange.bind(this);
        this.addStudentClicked = this.addStudentClicked.bind(this);
        this.stdName = '';
        this.stdCourse = '';
        this.stdFees = '';
    }

    onNameChange(event) {
        // console.log("Changed Value: ", event.target.value);
        this.stdName = event.target.value;
    }

    onCourseChange(event) {
        // console.log("Changed Value: ", event.target.value);
        this.stdCourse = event.target.value;
    }

    onFeesChange(event) {
        // console.log("Changed Value: ", event.target.value);
        this.stdFees = event.target.value;
    }

    addStudentClicked(event) {
        this.props.addStudent(this.stdName, this.stdCourse, this.stdFees);
        // this.refs.stdName.value = "";
        // this.refs.stdCourse.value = "";
        // this.refs.stdFees.value = "";
    }



    componentDidMount() {
        console.log("Department -> componentDidMount()", this);
    }

    render() {
        console.log("Department -> render()");
        return (
            <div>



                <h4>Department No: {this.props.deptNumber}</h4>
                <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>
                Name: <input type="text" name="stdName" ref="stdName" onChange={this.onNameChange} />
                Course: <input type="text" name="stdCourse" ref="stdCourse" onChange={this.onCourseChange} />
                Fees: <input type="text" name="stdFees" ref="stdFees" onChange={this.onFeesChange} />

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