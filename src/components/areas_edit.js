import React, { Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

class AreasEdit extends Component {
  render() {
    if(this.props.area){
      return(
        <div className='row'>
          <div>{this.props.area.id}</div>
          <div>{this.props.area.name}</div>
          <div>{this.props.area.description}</div>
        </div>
      )
    }
    return(
      <div>Area Edit Page</div>
    );
  }
}

//ownProps = this.props ???
function mapStateToProps({areas}, ownProps) { //only get areas part of app state
  console.log(areas);
  return {area: areas[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {})(AreasEdit);
