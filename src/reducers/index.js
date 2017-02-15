import tasks from './tasks';
import {combineReducers} from 'redux';
alert(tasks);
const test = (state={}, action) => {
    return "state";
}
const appReducer = combineReducers(tasks, test);
export default appReducer;