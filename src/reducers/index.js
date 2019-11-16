import { combineReducers } from 'redux';
//ket hop cac reducer voi nhau
import tasks from './Task';
import isDisplayForm from './IsDisplayForm';
import editTask from './EditTask';
import filterTable from './FilterTable';
import searchTask from './SearchTask';
import sortTask from './SortTask';


const myReducer = combineReducers({
   allTask : tasks,
   isDisplayForm,
   editTask,
   filterTable,
   searchTask,
   sortTask
});


export default myReducer;