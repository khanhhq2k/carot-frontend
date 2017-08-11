import React, { Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {createArea} from '../actions/index';

class AreasNew extends Component {
  renderField (field){
    // grab meta from field(destructure)
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    console.log(values);
    this.props.createArea(values, () =>{
      this.props.history.push('/areas'); //navigate to areas index page
    });
  }
  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Name'
          name='name'
          component={this.renderField}
        />
        <Field
          label='Description'
          name='description'
          component={this.renderField}
        />
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  //validate input from values object
  if(!values.name){
    errors.name = "Enter area name!";
  }
  if(!values.description){
    errors.description = "Enter area description!";
  }
  //return validation object
  return errors;
}

export default reduxForm({
  // name for the form
  form: 'AreasNewForm',
  //validation
  validate: validate
})(
  //bind action creator
  connect(null, {createArea})(AreasNew)
);
