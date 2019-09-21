import React, { Component } from 'react';
import StudentList from './StudentList';

import withLoadingSpinner from '../withLoadingSpinner';

// const StudentContainer = () => {
//     return (
//         <div>
//             <StudentList />
//         </div>
//     )
// }

const StudentListWithLoadingSpinner = withLoadingSpinner(StudentList);

class StudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        // In the real world, this is probably an Ajax call
        setTimeout(() => this.loadingComplete(), 5000);
        this.loadingComplete = this.loadingComplete.bind(this);
    }
    loadingComplete() {
        this.setState({ data: "loaded" });
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <StudentListWithLoadingSpinner data={this.state.data} />
            </div>
        );
    }
}

export default StudentContainer;