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
        this.state = {}
    }

    componentWillUnmount() {
        console.log("Student -> componentWillUnmount()");
    }

    componentDidMount() {
        // var name = null;
        // name.getName();
    }

    render() {
        return (
            <div>
                <p>
                    <span style={{ padding: '0px 25px', width: '25%' }}>{this.props.id}</span>
                    <span style={{ padding: '0px 25px', width: '25%' }}>{this.props.name}</span>
                    <span style={{ padding: '0px 25px', width: '25%' }}>{this.props.course}</span>
                    <span style={{ padding: '0px 25px', width: '25%' }}>{this.props.fees}</span>
                    <button onClick={() => {
                        this.props.deleteStudent(this.props.id)
                    }}>Delete</button>
                </p>;
            </div>
        );
    }
}

export default Student;


