import React, { Component } from 'react';
import './App.css';
import StudentDTO from './common/StudentDTO';
import DepartmentContainer from './components/department-container/DepartmentContainer';
import StudentContainer from './components/student-conatiner/StudentContainer';

import { StudentsProvider } from './context/StudentContext';
import { DepartmentProvider } from './context/DepartmentContext';

import axios from 'axios';

import { connect } from 'react-redux';
import { READ_ALL_STUDENT, READ_STUDENT, ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT } from './actionTypes';
// import '../node_modules/bootstrap/dist/css/b';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import Information from './components/hoc/Information';
import PageNotFound from './components/PageNotFound';

import StudentDetails from './components/student-conatiner/StudentDetails';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      newStudentAdded: false
    }
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
  }

  addStudent(name, course, fees) {
    console.log("App->addStudent(): ", name, course, fees);
    var temp = this.state.students;
    if (name === "" && course === "" && fees === "") {
      this.setState({
        students: temp,
        newStudentAdded: false
      });
    } else {

      var std = new StudentDTO(this.state.students.length + 1, name, course, fees);
      console.log('std', std);

      axios.post('http://localhost:8000/students', std).then(
        (response) => {
          console.log("Data: ", response.data);
          std._id = response.data["_id"];
          temp.push(std);
          this.setState({
            students: temp,
            newStudentAdded: true
          })
        }
      ).catch(error => {
        console.log("Error Response: ", error);
      });
    }
  }

  updateStudent(std) {
    // var temp = this.state.students.filter((s) => {
    //   return s._id !== _id;
    // });
    console.log(std);
    var findStudent = this.state.students.find((s) => {
      if (std._id === s._id) {
        return s;
      }
    })
    console.log(findStudent);
    findStudent["name"] = std["name"];
    findStudent["course"] = std["course"];
    findStudent["fees"] = std["fees"];
    console.log(findStudent);
    console.log("Updating Student: ", `http://localhost:8000/students/${findStudent._id}`);
    axios.put(`http://localhost:8000/students/${findStudent._id}`, findStudent).then(response => {
      console.log("Data: ", response.data);
      // this.setState({
      //   students: this.students
      // })
    }).catch(error => {
      console.log("Error Response: ", error);
    });
  }

  deleteStudent(_id) {
    var temp = this.state.students.filter((s) => {
      return s._id !== _id;
    });

    axios.delete(`http://localhost:8000/students/${_id}`).then(response => {
      console.log("Data: ", response.data);
      this.setState({
        students: temp
      })
    }).catch(error => {
      console.log("Error Response: ", error);
    });
  }

  componentDidMount() {
    this.props.readAllStudents();
  }

  render() {
    // console.log("App -> render()", this.state);

    return (

      <Router>
        <div className="App">
          <div className="container">

            <Link to="/home">Home</Link>&nbsp;&nbsp;
            <Link to="/home/info">Information</Link>&nbsp;&nbsp;
            <Link to="/department">Department</Link>&nbsp;&nbsp;
            <Link to="/student-list">StudentList</Link>

            <hr />

            <DepartmentProvider value={{ addStudent: this.addStudent }}>
              <StudentsProvider value={{
                newStudentAdded: this.state.newStudentAdded,
                deleteStudent: this.deleteStudent, updateStudent: this.updateStudent
              }}>
                <Switch>
                  <Route path="/" exact={true} component={Home} />
                  <Route path="/home/info" component={Information} />
                  <Route path="/home" component={Home} />
                  <Route path="/department" component={DepartmentContainer} />
                  <Route path="/student-list" component={StudentContainer} />
                  <Route path="/student/:id" component={StudentDetails} />
                  <Route path="/*" component={PageNotFound} />
                </Switch>
              </StudentsProvider>
            </DepartmentProvider>


          </div>

        </div>
      </Router >
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    readAllStudents: () => dispatch({ type: READ_ALL_STUDENT })
  }
}

export default connect(null, mapDispatchToProps)(App);


