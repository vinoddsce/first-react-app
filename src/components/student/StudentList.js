import React, { Component } from 'react';

import Student from './Student';

import { PropTypes } from 'prop-types';

class StudentList extends Component {
    constructor(props) {
        console.log("StudentList -> constructor() called !!!!");
        super(props);
        this.state = {}
    }


    static getDerivedStateFromProps(props, state) {
        console.log("Props", props);
        console.log("State", state);
    }

    render() {
        return (
            <>
                <h1><span style={{ padding: '0px 25px', width: '25%' }}>ID</span><span style={{ padding: '0px 25px', width: '25%' }}>Name</span><span style={{ padding: '0px 25px', width: '25%' }}>Course</span><span style={{ padding: '0px 25px', width: '25%' }}>Fees</span></h1>
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
            </>
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





