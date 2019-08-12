import React, { Component } from 'react';

import Student from './Student';

import { PropTypes } from 'prop-types';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <h1>Students: </h1>
                {
                    this.props.students.map((name, index) => {
                        return <Student name={name} key={index} />
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





