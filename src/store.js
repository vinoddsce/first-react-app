import { createStore } from 'redux';
import { READ_ALL_STUDENT, READ_STUDENT, ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT } from './actionTypes';
import axios from 'axios';

const initialState = {
    students: []
}

const reducer = (state = initialState, action) => {
    console.log("Action Obj: ", action);
    if (action.type === READ_ALL_STUDENT) {
        var data = [
            { _id: "12333", name: "Vinod", course: "Angular", fees: 111 },
            { _id: "12333", name: "Kumar", course: "ReactJS", fees: 111 },
            { _id: "12333", name: "M", course: "VueJS", fees: 111 }
        ];
        return {
            ...state,
            students: data
        }

        // fetch("http://localhost:8000/students", {
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     }
        // }).then(
        //     (response) => {
        //         response.json().then(data => {
        //             console.log("State: ", state);
        //             console.log("Data Now From Redux: ", data);
        //             return {
        //                 ...state,
        //                 students: data
        //             }
        //         })

        //     }
        // ).catch(error => {
        //     alert(error);
        //     console.log("Error Response: ", error);
        // });
    }

}


const store = createStore(reducer);

export default store;