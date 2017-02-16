import React from 'react';
import {connect} from 'react-redux';

export class Task extends React.Component{
    render(){
        if(!this.props.task){
            return (<div>Oops! Not existing task.</div>);
        }
        return (<div>
            <h1>Task Details</h1>
            <div>Summary: {this.props.task.summary}</div>
            <div>Details: {this.props.task.desc}</div>
            <div>Effort: {this.props.task.effort}</div>
            <div>Status: {this.props.task.completed ? 'Completed': 'On Going'}</div>
             <div>Created on: {this.props.task.createdDate.toString()}</div>
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        task: state.tasks.find((task) => task.id == ownProps.params.taskId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
