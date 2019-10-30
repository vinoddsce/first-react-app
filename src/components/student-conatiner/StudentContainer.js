import React, { Component } from 'react';
import StudentList from './StudentList';
import { fetch_all_students } from '../../studentsAction';
import withLoadingSpinner from '../../components/hoc/withLoadingSpinner';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import AngularStudents from './AngularStudents';
import ReactStudents from './ReactStudents';
import VueJSStudents from './VueJSStudents';
import NodeJSStudents from './NodeJSStudents';

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

    componentDidMount() {
        this.props.dispatch(fetch_all_students());
        // this.props.readAllStudents();
    }
    render() {
        console.log("StudentContainer --> render()");
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to={`${this.props.match.url}/all`}>All</Link>&nbsp;&nbsp;
                            <Link to={`${this.props.match.url}/angular`}>Angular</Link>&nbsp;&nbsp;
                            <Link to={`${this.props.match.url}/reactjs`}>ReactJS</Link>&nbsp;&nbsp;
                            <Link to={`${this.props.match.url}/vuejs`}>VueJS</Link>&nbsp;&nbsp;
                            <Link to={`${this.props.match.url}/nodejs`}>NodeJS</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <Route path={`${this.props.match.path}`} exact={true} component={StudentList} />
                    <Route path={`${this.props.match.path}/all`} component={StudentList} />
                    <Route path={`${this.props.match.path}/angular`} component={AngularStudents} />
                    <Route path={`${this.props.match.path}/reactjs`} component={ReactStudents} />
                    <Route path={`${this.props.match.path}/vuejs`} component={VueJSStudents} />
                    <Route path={`${this.props.match.path}/nodejs`} component={NodeJSStudents} />
                </div>
            </div>

            // <div style={{ textAlign: 'center' }}>
            //     <StudentListWithLoadingSpinner data={this.state.data} />
            // </div>
        );
    }
}

export default StudentContainer;