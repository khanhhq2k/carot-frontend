import React, { Component} from 'react';
import {connect} from 'react-redux';

class AreasEdit extends Component {
  render() {
    if(this.props.area){
      return(
        <div className='row'>
          <div>{this.props.area.Id}</div>
          <div>{this.props.area.Name}</div>
          <div>{this.props.area.Description}</div>
        </div>
      )
    }
    return(
      <div>Area Edit Page</div>
    );
  }
}

//ownProps = this.props
function mapStateToProps({areas}, ownProps) { //only get areas part of app state
  return {area: areas[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {})(AreasEdit);
