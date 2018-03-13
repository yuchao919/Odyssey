import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => (
  <Router>
    <div>
      <h1>React Router Tutorial</h1>
      <ul role="nav">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/repos">Repos</Link>
        </li>
      </ul>
    </div>
  </Router>
);
