import * as types from '../constants/actionTypes';

//string
var initState = '';

var searchTask = (state = initState, action) => {
    switch (action.type) {
        case types.SEARCH_TASK:
            
            return action.keyword;           
        default:
            return state;
    }
}

export default searchTask;