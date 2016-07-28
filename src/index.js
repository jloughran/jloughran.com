import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import './index.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={About} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Projects} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root')
);
