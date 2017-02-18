import React from 'react';
import { browserHistory } from 'react-router';
import {createTask} from './actions';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

export class TaskForm extends React.Component{
    constructor(){
        super();
        this.state = {summary:'', desc:'', effort: 0, completed: false};
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleEffortChange = this.handleEffortChange.bind(this);
        this.handleSubmittedCheckboxChange = this.handleSubmittedCheckboxChange.bind(this);
    }

    handleSummaryChange(event){
        this.setState({summary: event.target.value})
    }

    handleEffortChange(event){
      this.setState({effort: event.target.value});
    }

    handleDescChange(event){
        this.setState({desc: event.target.value});
    }

    handleFormSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.onSubmit({
          summary: this.state.summary,
          desc: this.state.desc,
          effort: parseInt(this.state.effort),
          completed: this.state.completed
        });
        browserHistory.push('/');
    }

    handleSubmittedCheckboxChange (event) {
      this.setState({completed: event.target.checked})
    }

    render(){
        return (
            <form>
               <h1> New Task</h1>
                <div>
                    <label>Summary:
                       <Field name='summary' type='text' component='input' onChange={this.handleSummaryChange}/>
                    </label>
                </div>
                <div>
                    <label>Description:
                        <Field type='text' component='input' name='desc' onChange={this.handleDescChange}/>
                    </label>
                </div>
                <div>
                    <label>Effort:
                        <input type='number'name='effort' onChange={this.handleEffortChange}/>
                    </label>
                </div>
                <div>
                    <label>Completed:
                        <input type='checkbox'name='completed' onChange={this.handleSubmittedCheckboxChange}/>
                    </label>
                </div>>
                <button type='submit' onClick={this.handleFormSubmit}>Create Task</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (task) => {
            dispatch(createTask(task));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'newTask'
})(TaskForm));
