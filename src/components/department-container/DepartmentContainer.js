import React, { Component } from 'react';
import StudentAddForm from './StudentAddForm';

import withHiddenProp from '../withHiddenProp';
import { DepartmentConsumer } from '../../context/DepartmentContext';

class DepartmentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentName: "Pre-Unversity",
            collegeName: "PESIT",
        }
    }

    render() {

        const StudentAddFormWithHidden = withHiddenProp(StudentAddForm);


        return (
            // <DepartmentConsumer>
            //     {
            //         (context) => {
            //             return (
            //                 <div>
            //                     <h4>Department No: {this.props.deptNumber}</h4>
            //                     <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>
            //                     {/* <StudentAddForm {...this.props} /> */}
            //                     <StudentAddFormWithHidden hidden={false} addStudent={context.addStudent} {...this.props} />
            //                 </div>
            //             )
            //         }
            //     }
            // </DepartmentConsumer>

            <div>
                <h4>Department No: {this.props.deptNumber}</h4>
                <p>College Name : {this.state.collegeName}, Department Name: {this.state.departmentName}</p>
                {/* <StudentAddForm {...this.props} /> */}
                <StudentAddFormWithHidden hidden={false} {...this.props} />
            </div>
        );


    }
}

export default DepartmentContainer;