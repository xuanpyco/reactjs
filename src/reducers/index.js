import tasks from './tasks';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const appReducer = combineReducers({tasks, formReducer});
export default appReducer;