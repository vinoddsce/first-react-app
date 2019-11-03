import { createStore, applyMiddleware } from 'redux';
import { READ_ALL_STUDENT, FETCHING_STUDENT, ERROR_OCCURED, READ_STUDENT, ADD_STUDENT, REMOVE_STUDENT, UPDATE_STUDENT } from './actionTypes';

import thunk from 'redux-thunk';

const initialState = {
    students: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    console.log("Action Obj: ", action);

    if (action.type === READ_ALL_STUDENT) {
        // var data = [
        //     { _id: "12333", name: "Vinod", course: "Angular", fees: 111 },
        //     { _id: "12333", name: "Kumar", course: "ReactJS", fees: 111 },
        //     { _id: "12333", name: "M", course: "VueJS", fees: 111 }
        // ];
        return {
            ...state,
            students: action.students,
            isError: false,
            isLoading: false
        }
    }

    if (action.type === FETCHING_STUDENT) {
        return {
            ...state,
            students: [],
            isError: false,
            isLoading: true
        }
    }

    if (action.type === ERROR_OCCURED) {
        return {
            ...state,
            students: [],
            isError: true,
            isLoading: false
        }
    }
    return state;
}


const store = createStore(reducer, applyMiddleware(thunk));
console.log("Store State Form store.js-> : ", store.getState());
export default store;