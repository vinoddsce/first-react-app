import React, { Component } from 'react';
import { StudentsConsumer } from '../../context/StudentContext';
import withColor from './withColor';
import Student from './Student';
import { connect } from 'react-redux';

class ReactStudents extends Component {
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
                                    this.props.students.map((std, index) => {
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
                                        if (std.course === 'ReactJS') {
                                            const FinalCompo = <WithColor {...props} bColor="blue" />;
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

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps, null)(ReactStudents);
// export default ReactStudents;