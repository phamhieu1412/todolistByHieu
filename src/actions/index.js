import * as types from './../constants/actionTypes';

export const showTask = () =>{
    return {
        type: types.LIST_ALL
    }
}

//task
export const saveTask = (task) =>{
    return {
        type: types.SAVE_TASK,
        task
    }
}
export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}
export const updateStatus = (id) =>{
    return {
        type: types.UPDATE_STATUS_TASK,
        id
    }
}
export const editTask = (task) => {
    return{
        type: types.EDIT_TASK,
        task
    }
}


//taskform
export const toggleForm = () =>{
    return{
        type: types.TOGGLE_FORM
    }
}
export const openForm = () =>{
    return{
        type: types.OPEN_FORM
    }
}
export const closeForm = () =>{
    return{
        type: types.CLOSE_FORM
    }
}


//filter, search, sort
export const filterTask = (filter) => {//filter: 1 object gom name va status
    return {
        type: types.FILTER_TABLE,
        filter
    }
}
export const searchTask = (keyword) =>{//1 string
    return {
        type: types.SEARCH_TASK,
        keyword
    }
}   
export const sortTask = (sort) => {//sort: 1 object gom by va value
    return{
        type: types.SORT_TASK,
        sort
    }
}
