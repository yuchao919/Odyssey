import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import css from './App.css';

import BasicExample from './01BasicExample';
import ParamsExample from './02ParamsExample';
import AuthExample from './03AuthExample';
import CustomLinkExample from './04CustomLinkExample';
import PreventingTransitionsExample from './05PreventingTransitionsExample';
import NoMatchExample from './06NoMatchExample';
import RecursiveExample from './07RecursiveExample';
import SidebarExample from './08SidebarExample';
import AnimationExample from './09AnimationExample';
import AmbiguousExample from './10AmbiguousExample';
import RouteConfigExample from './11RouteConfigExample';
import ModalGallery from './12ModalGallery';
import StaticRouterExample from './13StaticRouterExample';

const routes = [
  { url: '/basic', label: 'BasicExample', com: BasicExample },
  { url: '/url-params', label: 'ParamsExample', com: ParamsExample },
  { url: '/auth-workflow', label: 'AuthExample', com: AuthExample },
  { url: '/custom-link', label: 'CustomLinkExample', com: CustomLinkExample },
  { url: '/preventing-transitions', label: 'PreventingTransitionsExample', com: PreventingTransitionsExample },
  { url: '/no-match', label: 'NoMatchExample', com: NoMatchExample },
  { url: '/recursive-paths', label: 'RecursiveExample', com: RecursiveExample },
  { url: '/sidebar', label: 'SidebarExample', com: SidebarExample },
  { url: '/animated-transitions', label: 'AnimationExample', com: AnimationExample },
  { url: '/ambiguous-matches', label: 'AmbiguousExample', com: AmbiguousExample },
  { url: '/route-config', label: 'RouteConfigExample', com: RouteConfigExample },
  { url: '/modal-gallery', label: 'ModalGallery', com: ModalGallery },
  { url: '/static-router', label: 'StaticRouterExample', com: StaticRouterExample }
];

const App = () => (
  <Router>
    <div className="container">
      <div className="left">
        <ul>
          {routes.map(item => (
            <li key={item.label}>
              <NavLink
                to={item.url}
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <Switch>{routes.map(item => InnerRouter(item))}</Switch>
      </div>
    </div>
  </Router>
);

const InnerRouter = item => {
  const Com = item.com;
  return (
    <Route key={item.label} path={item.url}>
      <Com basename={item.url} />
    </Route>
  );
};

export default App;
