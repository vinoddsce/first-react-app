import React, { Component } from 'react';
import './App.css';
import StudentDTO from './common/StudentDTO';
import DepartmentContainer from './components/department-container/DepartmentContainer';
import StudentContainer from './components/student-conatiner/StudentContainer';

import { StudentsProvider } from './context/StudentContext';

import axios from 'axios';

import logo from './logo.svg';

// import '../node_modules/bootstrap/dist/css/b';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';


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
    fetch("http://localhost:8000/students", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }).then(
      (response) => {
        response.json().then(data => {
          console.log("Data: ", data);
          this.setState({
            students: data
          })
        })

      }
    ).catch(error => {
      alert(error);
      console.log("Error Response: ", error);
    });
  }

  render() {
    // console.log("App -> render()", this.state);

    return (
      // <div className="App">
      //     <p>{this.props.title}</p>
      //     <hr></hr>
      //     <hr></hr>
      //     <DepartmentContainer addStudent={this.addStudent} deptNumber={"100"} />
      //     <hr></hr>
      //     <br />
      //     <br />
      //     <br />
      //     <br />

      //     <StudentsProvider value={{
      //       newStudentAdded: this.state.newStudentAdded, students: this.state.students,
      //       deleteStudent: this.deleteStudent, updateStudent: this.updateStudent
      //     }}>
      //       <StudentContainer />
      //     </StudentsProvider>

      //     {/* <StudentContainer newStudentAdded={this.state.newStudentAdded} students={this.state.students} deleteStudent={this.deleteStudent} /> */}
      //   </div>
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/department">Department</Link></li>
              <li><Link to="/student-list">StudentList</Link></li>
            </ul>
            <hr />
            <hr />
            {/* Routes will go here */}
          </div>
          <hr />
          <Route path="/" exact={true} component={Home} />
          <Route path="/department" component={DepartmentContainer} />
          <Route path="/student-list" component={StudentContainer} />
          <hr />
        </div>
      </Router >
    );
  }
}


export default App;

