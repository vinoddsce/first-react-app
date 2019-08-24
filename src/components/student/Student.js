import React from 'react';

const Student = (props) => {
    return <p><span style={{ padding: '0px 25px', width: '25%' }}>{props.id}</span>
        <span style={{ padding: '0px 25px', width: '25%' }}>{props.name}</span>
        <span style={{ padding: '0px 25px', width: '25%' }}>{props.course}</span>
        <span style={{ padding: '0px 25px', width: '25%' }}>{props.fees}</span>
        <button onClick={() => {
            props.deleteStudent(props.id)
        }}>Delete</button></p>
}

export default Student;