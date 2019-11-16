import * as types from '../constants/actionTypes';

//array
var data = JSON.parse(localStorage.getItem('TASK'));
var initListWork = data ? data : [];


var tasks = (state = initListWork, action) => {
    var id ='';
    var index = -1;

    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: (action.task.status === 'true' || action.task.status === true) ? true : false
            };
            if (!task.id) {
                task.id = randomID();
                state.push(task);
            } else {
                index = findToIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('TASK', JSON.stringify(state));
            return [...state];        
        case types.DELETE_TASK:
            id = action.id;
            index = findToIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('TASK', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            id = action.id;
            index = findToIndex(state, id);            
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('TASK', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}


var findToIndex = (tasks, id) => {
    var index = -1;
    if (tasks.length > 0) {
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
//tao random id
var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var randomID = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// var findIndex = (tasks, id) => {
//     var result = -1;
//     tasks.forEach((task, index) => {
//         if(task.id === id){
//             result = index;
//         }
//     });
//     return result;
// }
export default tasks;