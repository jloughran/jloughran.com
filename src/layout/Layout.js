import React from 'react';

import Header from './Header';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <div className="row content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
