import React, { Component } from 'react';

import Student from './Student';

import { PropTypes } from 'prop-types';

class StudentList extends Component {
    constructor(props) {
        super(props);
        var temp = props.students.map(st => st);
        this.state = {
            stds: temp
        }
        console.log("StudentList -> constructor() called !!!!", this.state.stds);

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("StudentList -> getDerivedStateFromProps()");
        // console.log("Props", nextProps.students);
        // console.log("State", prevState.stds);
        var temp = nextProps.students.map(st => st);
        if (prevState.stds.length !== nextProps.students.length) {
            return {
                stds: temp
            };
        }
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.newStudentAdded) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        if (prevState.stds.length !== this.props.students.length) {
            return this.props.students.length - prevState.stds.length;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentDidCatch(error, info) {

    }

    render() {
        console.log("StudentList render()");
        return (
            <div style={{ border: "2px solid green" }}>
                <h3><span style={{ padding: '0px 25px', width: '25%' }}>ID</span><span style={{ padding: '0px 25px', width: '25%' }}>Name</span><span style={{ padding: '0px 25px', width: '25%' }}>Course</span><span style={{ padding: '0px 25px', width: '25%' }}>Fees</span></h3>
                {
                    this.props.students.map((std, index) => {
                        return <Student
                            id={std.id}
                            name={std.name}
                            course={std.course}
                            fees={std.fees}
                            deleteStudent={this.props.deleteStudent}
                            key={index} />
                    })
                }
            </div>
        );
    }
}

StudentList.propTypes = {
    students: PropTypes.array
}

// const arr_fun = (param_list_optional) => {
//     return "Hi"
// }



// const StudentList = (props) => {
//     return (
// <div>
//     <h1>Students: </h1>
//     {
//         props.students.map((name) => {
//             return <Student name={name} />
//         })
//     }
// </div>
//     );
// }

export default StudentList;





