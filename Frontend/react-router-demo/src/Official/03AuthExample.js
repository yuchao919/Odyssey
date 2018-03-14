import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = props => (
  <Router basename={props.basename}>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/protected" component={PrivateRoute} />
      {/* <PrivateRoute path="/protected" component={Protected} /> */}
      {/* 官方文档是这么写的，卡了我一天，它想作甚？其心可诛啊！ */}
      <Route path="/login" component={Login} />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(({ history }) => {
  console.log('render AuthButton');
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
});

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       fakeAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: '/login',
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (fakeAuth.isAuthenticated) {
      return <Route component={Protected} />;
    }
    return <Route render={props => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />;
  }
}

const Public = () => {
  console.log('get Public');
  return <h3>Public</h3>;
};
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };

    this.login = this.login.bind(this);
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    // console.log('render Login');
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;

/**
 * 这个例子问题处在哪里？
 * 1.首先在调用PrivateRoute，因为没有登录(fakeAuth.isAuthenticated===false)，所以它自动跳转到/login页面。
 * 2.然后render完login后，居然又去调用PrivateRoute，然后又来render login这个组件
 * 其实第一步就失去控制了，劳资只要调用下PrivateRoute来初始化两个分支下的Route，你他喵的直接跳转作甚？
 *
 */
