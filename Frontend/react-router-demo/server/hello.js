const React = require('react');
const { renderToString } = require('react-dom/server');

// class App extends React.Component {
//   render() {
//     return <div>hello world</div>;
//   }
// }

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const html = renderToString(React.createElement(Hello, { toWhat: 'World' }, null));
console.log(html);
