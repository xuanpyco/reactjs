import React from 'react';
import TaskList from './TaskList.js';
import Task from './Task.js';
import { render } from 'react-dom';
import TaskForm from './TaskForm.js';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

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
			<div>
				<div style={helloStyle}>Hello Guest. <Link to='/'>My Tasks</Link></div>

				{React.cloneElement(this.props.children, {tasks: this.state.tasks, app: this})}
			</div>
		);
	}
}

render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={TaskList}/>
			<Route path='tasks/:taskId' component={Task}/>
			<Route path='taskForm' component={TaskForm}/>
		</Route>
	</Router>,
	document.getElementById('root')
);
