import React from 'react';
import TaskList from './TaskList.js';
import Task from './Task.js';
import { render } from 'react-dom';
import TaskForm from './TaskForm.js';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
import appReducer from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
	constructor(){
		super();
		this.state = {tasks : [{id:0, summary: 'Task 1', desc: 'Complete assign 2 task'}, {id:1, summary: 'Task 2', desc: 'Complete assign 2 task'}]};
		this.createTask = this.createTask.bind(this);
	}
	
	createTask(summary, desc){
		var currentTasks = this.state.tasks;
		this.setState({tasks: [{id: currentTasks.length, summary: summary, desc: desc}, ...currentTasks]})
	}
	render() {
		const helloStyle = {color:'green', fontStyle: 'italic'};
		return (
			<MuiThemeProvider>
			<div>
				<div style={helloStyle}>Hello Guest. <Link to='/'>My Tasks</Link></div>
				{this.props.children}
			</div>
			</MuiThemeProvider>
		);
	}
}

let store = createStore(appReducer);

const Root =
	(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={TaskList}/>
				<Route path='tasks/:taskId' component={Task}/>
				<Route path='taskForm' component={TaskForm}/>
			</Route>
		</Router>
	</Provider>);
render(Root,
	document.getElementById('root')
);
