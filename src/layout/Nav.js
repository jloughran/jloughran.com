import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="home-menu">
        <Link to="/about" className="home-menu-link menu-inactive">About</Link>
        <Link to="/projects" className="home-menu-link menu-inactive">Projects</Link>
        <Link to="/contact" className="home-menu-link menu-inactive">Contact</Link>
        <a href="https://github.com/jloughran" className="home-menu-link menu-inactive">GitHub</a>
      </div>
    );
  }
}
