import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import {fetchAreas} from '../actions/index';

class AreasIndex extends Component {
  componentDidMount(){
    //dataflow: 2. we call action creator to fetch list of posts,
    // data will go through action creator -> posts index reducer -> state -> component props via mapStateToProps
    // so we will be able to call this.props.posts
    this.props.fetchAreas();
  }
  renderAreas(){
    return _.map(this.props.areas, area => {
      return (
        <tr key={area.Id}>
          <td>{area.Name}</td>
          <td>{area.Description}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      );
    });

  }
  render(){
    return(
      <div>
        <div className='areas-list row'>
          <div className='col-xs-12'>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th colSpan='2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.renderAreas() }
              </tbody>
            </table>
          </div>
        </div>
      </div>


    );
  }
}

function mapStateToProps(state){
  return {areas: state.areas}
}

export default connect(mapStateToProps, {fetchAreas: fetchAreas})(AreasIndex);
