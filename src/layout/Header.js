import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row text-center">
        <Nav /><br />
        <Link to="/" className="home-link">
          <h1 className="home-title">Jack Loughran</h1>
        </Link>
      </div>
    );
  }
}
