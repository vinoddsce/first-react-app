import React, { Component } from 'react';

import Student from './Student';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Students: </h1>
                {
                    this.props.students.map((name) => {
                        return <Student name={name} />
                    })
                }
            </div>
        );
    }
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




