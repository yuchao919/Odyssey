import React, { Component } from 'react';

import './Greeter.scss';
import message from '../../assets/json/message.json';

class Greeter extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    const msg = this.textInput.value || this.props.name;
    alert(`Hello ${msg}`);
  };

  render() {
    return (
      <div className={'root'}>
        {message.greetText}
        <br />
        Hello {this.props.name}
        <br />
        <input type="text" className={'txt'} placeholder={'Please Input'} ref={el => (this.textInput = el)} />
        <br />
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default Greeter;
