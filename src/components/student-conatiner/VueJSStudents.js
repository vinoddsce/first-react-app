import React, { Component } from 'react';
import { StudentsConsumer } from '../../context/StudentContext';
import withColor from './withColor';
import Student from './Student';

class VueJSStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <StudentsConsumer>
                {
                    (context) => {
                        return (
                            <div style={{ border: "2px solid green" }}>
                                <h3><span style={{ padding: '0px 25px', width: '25%' }}>ID</span><span style={{ padding: '0px 25px', width: '25%' }}>Name</span><span style={{ padding: '0px 25px', width: '25%' }}>Course</span><span style={{ padding: '0px 25px', width: '25%' }}>Fees</span></h3>
                                {
                                    context.students.map((std, index) => {
                                        const WithColor = withColor(Student);
                                        const props = {
                                            _id: std._id,
                                            name: std.name,
                                            course: std.course,
                                            fees: std.fees,
                                            updateStudent: context.updateStudent,
                                            deleteStudent: context.deleteStudent,
                                            key: index
                                        }
                                        if (std.course === 'VueJS') {
                                            const FinalCompo = <WithColor {...props} bColor="orange" />;
                                            return FinalCompo;
                                        }

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

export default VueJSStudents;