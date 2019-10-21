import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
import { INCR, DECR } from './actionTypes';
import { connect } from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("App props: ", props);
  }

  render() {
    return (
      <>
        <Counter />
        <br />
        <span>
          <button onClick={this.props.increment}>+</button><button onClick={this.props.decrement}>-</button>
        </span>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: INCR })
    },
    decrement: () => {
      dispatch({ type: DECR })
    }
  }
}


export default connect(null, mapDispatchToProps)(App);


