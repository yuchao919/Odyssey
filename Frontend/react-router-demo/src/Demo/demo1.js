import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, HashRouter } from 'react-router-dom';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>Our React Router 4 App</header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
    </ul>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/user" component={UsersPage} />
    </main>
  </div>
);

const HomePage = () => <h1>Home Page</h1>;
const UsersPage = () => <h1>User Page</h1>;

export default () => (
  <HashRouter>
    <PrimaryLayout />
  </HashRouter>
);
