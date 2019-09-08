import React from 'react';
import StudentList from './StudentList';


const StudentContainer = (props) => {
    return (
        <div style={{ border: "5px solid red" }}>
            <StudentList {...props} />
        </div>
    )
}

export default StudentContainer;