import React, { Component } from 'react';
import message from '../json/message.json';

const Hello = () => {
  console.log('Hello');
};

class Greeter extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert(`Hello ${this.props.name}`);
  }

  // // 这种写法已经不是ES2015(ES6)的写法了，干死babel
  // handleClick = e => {
  //   alert(`Hello ${this.props.name}`);
  // };

  render() {
    return (
      <div className={'root'}>
        {message.greetText}
        <br />
        Hello {this.props.name}
        <br />
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default Greeter;
