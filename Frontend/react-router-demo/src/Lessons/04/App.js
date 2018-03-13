import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
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
        {/* add this */}
        {this.props.children}
      </div>
    );
  }
}
const Repos = () => <div>Repos</div>;
const About = () => <div>About</div>;

export default () => (
  <Router>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/repos" component={Repos} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);
