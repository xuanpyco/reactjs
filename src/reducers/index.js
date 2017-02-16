import tasks from './tasks';
import {combineReducers} from 'redux';

const appReducer = combineReducers({tasks});
export default appReducer;