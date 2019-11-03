import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import StudentDTO from '../../common/StudentDTO';

import { DepartmentConsumer } from '../../context/DepartmentContext';

class StudentAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stdName: "",
            stdCourse: "",
            stdFees: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.onStudentFormSubmit = this.onStudentFormSubmit.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.nameRef = React.createRef();
    }

    handleChange(event) {
        console.log("Control: ", event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onStudentFormSubmit(event) {
        console.log("Using Ref: ", this.nameRef.value);
        this.props.addStudent(this.state.stdName, this.state.stdCourse, this.state.stdFees);
        event.preventDefault();
    }

    addStudent(name, course, fees) {
        console.log("App->addStudent(): ", name, course, fees);
        var temp = this.state.students;
        if (name === "" && course === "" && fees === "") {
            this.setState({
                students: temp,
                newStudentAdded: false
            });
        } else {

            var std = new StudentDTO(this.state.students.length + 1, name, course, fees);
            console.log('std', std);

            axios.post('http://localhost:8000/students', std).then(
                (response) => {
                    console.log("Data: ", response.data);
                    std._id = response.data["_id"];
                    temp.push(std);
                    // this.setState({
                    //     students: temp,
                    //     newStudentAdded: true
                    // })
                }
            ).catch(error => {
                console.log("Error Response: ", error);
            });
        }
    }

    componentDidMount() {
        this.nameRef.current.focus();
    }

    render() {
        return (
            <div style={{ border: "2px solid green" }}>
                <h4>Department No: {this.props.deptNumber}</h4>
                <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>

                <form onSubmit={(event) => {
                    this.addStudent(this.state.stdName, this.state.stdCourse, this.state.stdFees);
                    event.preventDefault();
                }}>
                    Name: <input type="text" value={this.state.stdName}
                        ref={this.nameRef}
                        name="stdName" onChange={this.handleChange} />

                    {/* Course: <input type="text" value={this.state.stdCourse} name="stdCourse" onChange={this.handleChange} /> */}

                    Course: <select value={this.state.stdCourse} name="stdCourse" onChange={this.handleChange}>
                        <option value="ReactJS">ReactJS</option>
                        <option value="Angular">Angular</option>
                        <option value="VueJS">VueJS</option>
                        <option defaultValue="NodeJS">NodeJS</option>
                    </select>

                    Fees: <input type="text" value={this.state.stdFees} name="stdFees" onChange={this.handleChange} />
                    <button type="submit" name="Submit">Submit</button>
                </form>

            </div>
        )

    }
}

StudentAddForm.propTypes = {
    addStudent: PropTypes.func.isRequired,
    deptNumber: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string
    ]).isRequired
}


export default StudentAddForm;