import React, { Component } from 'react';

// const Student = (props) => {
//     return <p><span style={{ padding: '0px 25px', width: '25%' }}>{props.id}</span>
//         <span style={{ padding: '0px 25px', width: '25%' }}>{props.name}</span>
//         <span style={{ padding: '0px 25px', width: '25%' }}>{props.course}</span>
//         <span style={{ padding: '0px 25px', width: '25%' }}>{props.fees}</span>
//         <button onClick={() => {
//             props.deleteStudent(props.id)
//         }}>Delete</button></p>
// }

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            stdId: this.props.id,
            stdName: this.props.name,
            stdCourse: this.props.course,
            stdFees: this.props.fees
        }
        this.editStudent = this.editStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log("Control: ", event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    editStudent() {
        this.setState({
            isEdit: true
        })
    }

    updateStudent() {
        this.setState({
            isEdit: false
        })
    }

    render() {
        return (

            this.state.isEdit ?
                <div>

                    <form onSubmit={this.updateStudent}>
                        <span>{this.state.stdId}</span>
                        <input type="text" value={this.state.stdName} name="stdName" onChange={this.handleChange} />
                        {/* Course: <input type="text" value={this.state.stdCourse} name="stdCourse" onChange={this.handleChange} /> */}

                        <select value={this.state.stdCourse} name="stdCourse" onChange={this.handleChange}>
                            <option value="ReactJS">ReactJS</option>
                            <option value="AngularJS">AngularJS</option>
                            <option value="VueJS">VueJS</option>
                            <option defaultValue="NodeJS">NodeJS</option>
                        </select>

                        <input type="text" value={this.state.stdFees} name="stdFees" onChange={this.handleChange} />
                        <button type="submit" name="Submit">Update</button>
                    </form>

                </div>

                :

                <div>
                    <p>
                        <span style={{ padding: '0px 25px', width: '25%' }}>{this.state.stdId}</span>
                        <span style={{ padding: '0px 25px', width: '25%' }}>{this.state.stdName}</span>
                        <span style={{ padding: '0px 25px', width: '25%' }}>{this.state.stdCourse}</span>
                        <span style={{ padding: '0px 25px', width: '25%' }}>{this.state.stdFees}</span>
                        <button onClick={() => {
                            this.editStudent()
                        }}>Edit</button>

                        <button onClick={() => {
                            this.props.deleteStudent(this.state.stdId)
                        }}>Delete</button>
                    </p>
                </div>

        );
    }
}

export default Student;


