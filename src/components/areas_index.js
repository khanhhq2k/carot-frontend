import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import {fetchAreas, editArea, deleteArea} from '../actions/index';

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
          <td>{area.Id}</td>
          <td>{area.Name}</td>
          <td>{area.Description}</td>
          <td>
            <Link to={`/areas/${area.Id}/edit`}
              className='btn btn-link'
              onClick={this.onEditAreaClick.bind(this, [area.Id, area.Name, area.Description]) }
            >
              Edit
            </Link>
          </td>
          <td><button type="button" className="btn btn-link" onClick={this.onDeleteAreaClick.bind(this, area.Id)}>Delete</button></td>
        </tr>
      );
    });
  }

  onEditAreaClick(values_array) {
    // console.log(values_array);
    const values = {
      id: values_array[0],
      name: values_array[1],
      description: values_array[2]
    };
    this.props.editArea(values);
  }

  onDeleteAreaClick(area_id){
    const values = {
      id: area_id
    };
    this.props.deleteArea(values);
  }
  render(){
    if(!this.props.areas){
      return <div>Loading...</div>;
    }
    return(
      <div>
        <div className='areas-header row'>
          <div className='col-xs-6'>
            <h3>Areas Index</h3>
          </div>
          <div className='text-xs-right add-area-btn col-xs-6'>
            <Link className='btn btn-primary' to='/areas/new'>
              Add Area
            </Link>
          </div>
        </div>
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

export default connect(mapStateToProps, {fetchAreas, editArea, deleteArea})(AreasIndex);
