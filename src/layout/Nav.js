import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="home-menu">
        <Link to="/about" className="home-menu-link menu-inactive" activeClassName="menu-active">About</Link>
        <Link to="/projects" className="home-menu-link menu-inactive" activeClassName="menu-active">Projects</Link>
        <a href="https://github.com/jloughran" className="home-menu-link menu-inactive">GitHub</a>
      </div>
    );
  }
}
