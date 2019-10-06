
import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                Counter Value Is : {this.props.count}
            </>
        );
    }
}

export default Counter;