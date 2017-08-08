import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavLinkHelper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <NavLink {...this.props} className='nav-link' activeClassName="active"/>
  }
}
