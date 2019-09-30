import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("Home: ", this.props);
        return (
            <div className="container">
                <h1>This is home component</h1>
            </div>
        );
    }
}

export default Home;