import React, { Component } from 'react';
import './App.css';
import Department from './components/Department';
import StudentList from './components/student/StudentList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(name) {
    console.log("App->addStudent(): ", name);

    var temp = this.state.students;
    temp.push(name);

    this.setState({
      students: temp
    })
  }

  render() {
    console.log("App -> render()", this.state);
    return (
      <div className="App">
        <p>{this.props.title}</p>
        <hr></hr>
        <hr></hr>
        <Department addStudent={this.addStudent} deptNumber={"100"} />
        <hr></hr>
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;