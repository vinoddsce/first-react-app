import React, { Component } from 'react';

class Department extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Department -> render()");
        return (
            <div>
                <p>College Name : {this.props.collegeName}</p>
                <p>Department Name: {this.props.deptName}</p>
            </div>
        );
    }
}

export default Department;