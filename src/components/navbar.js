import React, { Component } from 'react';
import NavLinkHelper from './modules/navlink_helper';

export default class NavBar extends Component {

  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLinkHelper to="/" exact>Home</NavLinkHelper>
        </li>
        <li className="nav-item">
          <NavLinkHelper to="/posts" exact>Posts</NavLinkHelper>
        </li>

      </ul>
    );
  }
}
