
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, null)(Counter);