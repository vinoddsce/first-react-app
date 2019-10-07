
import { INCR, DECR } from './actionTypes';

const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    var cnt = state.count;
    switch (action.type) {
        case INCR:
            console.log("Incr: ", state.count);
            cnt++;
            return {
                count: cnt
            }
        case DECR:
            console.log("Decr: ", state.count);
            cnt--;
            return {
                count: cnt
            }
        default:
            return state;
    }
}