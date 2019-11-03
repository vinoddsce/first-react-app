import React, { Component } from 'react';

import Student from './Student';
import { fetch_all_students } from '../../studentsAction';
import { StudentsConsumer } from '../../context/StudentContext';
import withColor from './withColor';
import { connect } from 'react-redux';

class StudentList extends Component {
    constructor(props) {
        super(props);
        // console.log("this.students", this.students);
    }

    componentDidMount() {
        this.props.dispatch(fetch_all_students());
        // this.props.readAllStudents();
    }

    render() {
        console.log("StudentList --> render()", this.props);
        return (

            <StudentsConsumer>
                {
                    (context) => {
                        return (
                            <div style={{ border: "2px solid green" }}>
                                <h3><span style={{ padding: '0px 25px', width: '25%' }}>ID</span><span style={{ padding: '0px 25px', width: '25%' }}>Name</span><span style={{ padding: '0px 25px', width: '25%' }}>Course</span><span style={{ padding: '0px 25px', width: '25%' }}>Fees</span></h3>
                                {this.props.isLoading ? <h3>Loading...</h3> :

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
                                        } else if (std.course === 'Angular') {
                                            const FinalCompo = <WithColor {...props} bColor="red" />;
                                            return FinalCompo;
                                        } else {
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

// StudentList.propTypes = {
//     students: PropTypes.array
// }

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


const mapStateToProps = state => {
    return {
        students: state.students,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, null)(StudentList);






