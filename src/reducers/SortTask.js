import * as types from '../constants/actionTypes';

//object
var initState = {
    by: 'name',
    value: 1 
};

var sortTask = (state = initState, action) => {
    switch (action.type) {
        case types.SORT_TASK:
            return {
                by: action.sort.by,
                value: action.sort.value
            };           
        default:
            return state;
    }
}

export default sortTask;