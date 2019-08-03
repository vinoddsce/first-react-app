import React, { Component } from 'react';
import './App.css';
import Department from './components/Department';
import StudentList from './components/StudentList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stdName: ''
    }
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(name) {
    console.log("App->addStudent(): ", name);
    this.setState({
      stdName: name
    })
  }

  render() {
    console.log("App -> render()", this.state);
    return (
      <div className="App">
        <p>{this.props.title}</p>
        <hr></hr>
        <hr></hr>
        <Department addStudent={this.addStudent} />
        <hr></hr>
        <StudentList stdName={this.state.stdName} />
      </div>
    );
  }
}

export default App;