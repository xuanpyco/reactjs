import React from 'react';
import { browserHistory } from 'react-router';
import {createTask} from './actions';
import {connect} from 'react-redux';

export class TaskForm extends React.Component{
    constructor(){
        super();
        this.state = {summary:'', desc:''};
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleSummaryChange(event){
        this.setState({summary: event.target.value})
    }

    handleDescChange(event){
        this.setState({desc: event.target.value});
    }

    handleFormSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.onSubmit({summary: this.state.summary, desc: this.state.desc});
        browserHistory.push('/');
    }

    render(){
        return (
            <div>
                <h1> New Task</h1>
            <form>
                <div>
                    <label>Summary:
                       <input name='summary' type='text' onChange={this.handleSummaryChange}/>
                    </label>
                </div>
                <div>
                    <label>Description:
                        <input type='text'name='desc' onChange={this.handleDescChange}/>
                    </label>
                </div>
                <input type='submit' value='Create Task' onClick={this.handleFormSubmit}/>
            </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (task) => {
            dispatch(createTask(task.summary, task.desc));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);