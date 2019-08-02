import React, { Component } from 'react';
import './App.css';
import Department from './components/Department';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      departmentName: "Pre-Unversity",
      collegeName: "PESIT"
    }
    this.changeDepartmentName = this.changeDepartmentName.bind(this);
    // setTimeout(() => {
    //   this.setState({
    //     departmentName: "PUC"
    //   })
    // }, 5000);
  }

  changeDepartmentName() {
    // this.state.departmentName = "PUC";
    this.setState({
      departmentName: "PUC"
    })
  }

  render() {
    console.log("App -> render()", this.state);
    return (
      <div className="App">
        <p>{this.props.title}</p>
        <Department deptName={this.state.departmentName} collegeName={this.state.collegeName} />
        <button onClick={this.changeDepartmentName}>Change</button>
      </div>
    );
  }
}

export default App;