import React, { Component } from 'react';

import Student from './Student';

import { PropTypes } from 'prop-types';
import { StudentsConsumer } from '../../context/StudentContext';

class StudentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("StudentList render()");
        return (
            <StudentsConsumer>
                {
                    (context) => {
                        return (
                            <div style={{ border: "2px solid green" }}>
                                <h3><span style={{ padding: '0px 25px', width: '25%' }}>ID</span><span style={{ padding: '0px 25px', width: '25%' }}>Name</span><span style={{ padding: '0px 25px', width: '25%' }}>Course</span><span style={{ padding: '0px 25px', width: '25%' }}>Fees</span></h3>
                                {
                                    context.students.map((std, index) => {
                                        return <Student
                                            _id={std._id}
                                            name={std.name}
                                            course={std.course}
                                            fees={std.fees}
                                            updateStudent={context.updateStudent}
                                            deleteStudent={context.deleteStudent}
                                            key={index} />
                                    })
                                }
                            </div>
                        );
                    }
                }
            </StudentsConsumer>
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





