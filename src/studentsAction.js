import { FETCHING_STUDENT, READ_ALL_STUDENT, ERROR_OCCURED, READ_STUDENT, ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT } from './actionTypes';
import axios from 'axios';
import store from "./store";

export const fetchStudents = () => {
    return {
        type: FETCHING_STUDENT
    }
}

export const errorWhileStudents = () => {
    return {
        type: ERROR_OCCURED
    }
}

export const studentsFetchCompleted = (students) => {
    return {
        type: READ_ALL_STUDENT,
        students: students
    }
}


export const fetch_all_students = () => {
    store.dispatch(fetchStudents());
    return (dispatch, getState) => {
        console.log('Fetching All Kiddos !!!!!');
        return fetch("http://localhost:8000/students", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(
            (response) => {
                response.json().then(students => {
                    console.log("State: ", getState());
                    console.log("Data Now From Redux: ", students);
                    dispatch(studentsFetchCompleted(students));
                })

            }
        ).catch(error => {
            alert(error);
            console.log("Error Response: ", error);
        });
    }
}
