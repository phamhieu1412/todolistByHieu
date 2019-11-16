import * as types from '../constants/actionTypes';

//object
var initState = {};

var editTask = (state = initState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;
        default:
            return state;
    }
}

export default editTask;