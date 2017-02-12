import React from 'react';

export default class Task extends React.Component{
    render(){
        let taskId = this.props.params.taskId;
        let currentTask = this.props.tasks.find((task) => task.id == taskId);
        if(!currentTask){
            return (<div>Oops! Not existing task.</div>);
        }
        return (<div>
            <h1>Task Details</h1>
            <div>Summary: {currentTask.summary}</div>
            <div>Details: {currentTask.desc}</div>
        </div>);
    }
}