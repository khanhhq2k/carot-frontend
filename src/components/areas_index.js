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
        <li className='list-group-item' key={area.Id}>
          {area.Name}
        </li>
      );
    });

  }
  render(){
    return(
      <div>
        <div className='row'>
          Area Index
        </div>
        <div className='areas-list row'>
          <div className='col-xs-12'>
            <ul className='list-group'>
              { this.renderAreas() }
            </ul>
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
