import React, { Component } from 'react';
import Student from './Student';

class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            course: ""
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:8000/students/${this.props.match.params.id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(
            (response) => {
                response.json().then(data => {
                    console.log("Student: ", data);
                    this.setState({
                        name: data["name"],
                        course: data["course"]
                    })
                })

            }
        ).catch(error => {
            alert(error);
            console.log("Error Response: ", error);
        });
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h1>StudentDetails !!!!</h1>
                <h3>Name: {this.state.name}</h3>
                <h3>Course: {this.state.course}</h3>
                <button onClick={this.goBack}>Back</button>
            </div>
        );
    }
}

export default StudentDetails;