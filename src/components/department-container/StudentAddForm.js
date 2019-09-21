import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

    componentDidMount() {
        this.nameRef.current.focus();
    }

    render() {
        // console.log("Department -> render()");
        return (
            <div style={{ border: "2px solid green" }}>
                <h4>Department No: {this.props.deptNumber}</h4>
                <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>

                <form onSubmit={this.onStudentFormSubmit}>
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
        );
    }
}

StudentAddForm.propTypes = {
    addStudent: PropTypes.func.isRequired,
    deptNumber: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string
    ]).isRequired
}


export default StudentAddForm;