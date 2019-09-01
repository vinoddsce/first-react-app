import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentName: "Pre-Unversity",
            collegeName: "PESIT",
            stdName: "",
            stdCourse: "",
            stdFees: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.onStudentFormSubmit = this.onStudentFormSubmit.bind(this);
    }

    handleChange(event) {
        console.log("Control: ", event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onStudentFormSubmit(event) {
        this.props.addStudent(this.state.stdName, this.state.stdCourse, this.state.stdFees);
        event.preventDefault();
    }

    render() {
        // console.log("Department -> render()");
        return (
            <div>
                <h4>Department No: {this.props.deptNumber}</h4>
                <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>

                <form onSubmit={this.onStudentFormSubmit}>
                    Name: <input type="text" value={this.state.stdName} name="stdName" onChange={this.handleChange} />
                    {/* Course: <input type="text" value={this.state.stdCourse} name="stdCourse" onChange={this.handleChange} /> */}

                    Course: <select value={this.state.stdCourse} name="stdCourse" onChange={this.handleChange}>
                        <option value="ReactJS">ReactJS</option>
                        <option value="AngularJS">AngularJS</option>
                        <option value="VueJS">VueJS</option>
                        <option defaultValue="NodeJS">NodeJS</option>
                    </select>

                    Fees: <input type="text" value={this.state.stdFees} name="stdFees" onChange={this.handleChange} />
                    <button type="submit" name="Submit">Submit</button>
                </form>

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