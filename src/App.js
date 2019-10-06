import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    var cnt = this.state.count;
    cnt++;
    this.setState({
      count: cnt
    })
  }

  decrement = () => {
    var cnt = this.state.count;
    cnt--;
    this.setState({
      count: cnt
    })
  }

  render() {
    return (
      <>
        <Counter count={this.state.count} />
        <br />
        <span><button onClick={this.increment}>+</button><button onClick={this.decrement}>-</button></span>
      </>
    );
  }
}


export default App;


