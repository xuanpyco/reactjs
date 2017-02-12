import React from 'react';
import Task from './Task.js';
import {Link} from 'react-router';

export default class TaskList extends React.Component{
    constructor(){
        super();
    }

    render(){                               
        return (<div>
                    <h1>Task List</h1>
                    <Link to='/taskForm'>Create New Task</Link>
                    {this.props.tasks.map((task) => <div><Link to={'/tasks/' + task.id}>{task.summary}</Link></div>)}
                </div>);
    }
}