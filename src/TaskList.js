import React from 'react';
import Task from './Task.js';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapStateToProp = (state) => {
    return {
        tasks: state.tasks
    };
}

const mapDispatchToProp = (dispatch) => {
    return {};
}
export class TaskList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (<div>
                    <h1>Task List</h1>
                    <Link to='/taskForm'>Create New Task</Link>
                    {this.props.tasks.map((task) => <div key={task.id} ><Link to={'/tasks/' + task.id}>{task.summary}</Link></div>)}
                    <div><b>Total Effort: {this.props.tasks.reduce((total, task) => (total + task.effort), 0)}</b></div>
                </div>);
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(TaskList);
