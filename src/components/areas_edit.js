import React, { Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {updateArea} from '../actions/index';


class AreasEdit extends Component {
  componentDidMount() {
    this.handleInitialize();
  }
  handleInitialize() {
    const initData = {
      name: this.props.area.name,
      description: this.props.area.description
    };
    this.props.initialize(initData);
  }
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
          {...field.input} //field.input is an object input, contains event handlers + props
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    console.log("you have submit");
    console.log(values)
    // this.props.createArea(values, () =>{
    //   this.props.history.push('/areas'); //navigate to areas index page
    // });
  }

  render() {
    const { handleSubmit } = this.props;
    return(
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
        <Link to='/areas' className='btn btn-danger'>Cancel</Link>
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
//ownProps = this.props ???
// Return an object, this object will be merge to component props
// We will use this for initialValues
function mapStateToProps({areas}, ownProps) { //only get areas part of app state
  return {area: areas[ownProps.match.params.id]}
}
// export default reduxForm({
//   form: 'AreasEditForm',
//   validate: validate,
//   enableReinitialize: true
// })(
//   connect(mapStateToProps, {updateArea})(AreasEdit)
// );

export default connect(mapStateToProps, {updateArea})(reduxForm({
  form: 'AreasEditForm',
  validate: validate
})(AreasEdit));
