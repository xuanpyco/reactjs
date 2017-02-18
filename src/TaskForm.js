import React from 'react';
import { browserHistory } from 'react-router';
import {createTask} from './actions';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker
} from 'redux-form-material-ui';

const required = value => value? undefined: 'Required';

const nonNegative = value => value && parseInt(value) >= 0? undefined: 'Must be a non-negative number`';

export class TaskForm extends React.Component{
    constructor(){
        super();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(values){
            this.props.onSubmit({
            summary: values.summary,
            desc: values.desc,
            effort: parseInt(values.effort),
            completed: values.completed
        });
        browserHistory.push('/');
    }

    renderTextField ({ input, label, meta: { touched, error }}, hintText){
        return (
            <TextField hintText={label}
                floatingLabelText={label}
                errorText={touched && error}
                {...input}
            />);
    }
    render(){
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
               <h1> New Task</h1>
                <div>
                    <Field validate={required} floatingLabelText='Summary' name='summary' type='text' component={TextField} />
                </div>
                <div>
                    <Field floatingLabelText='Description' type='text' component={TextField} name='desc' />
                </div>
                <div>
                    <Field validate={nonNegative} floatingLabelText='Effort' component={TextField} type='number'name='effort' />
                </div>
                <div>
                    <Field component={Checkbox} label='Completed' name='completed'/>
                </div>
                <RaisedButton label="Create Task" primary={true} onClick={handleSubmit(this.handleFormSubmit)}/>
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
