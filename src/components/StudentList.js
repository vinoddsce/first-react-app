import React, { Component } from 'react';


class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <p>Student Name Is: <span style={{ color: 'green' }}>{this.props.stdName}</span></p>
            </div>
        );
    }
}

export default StudentList;