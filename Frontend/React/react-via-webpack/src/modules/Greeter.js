import React, { Component } from 'react';
import message from '../json/message.json';

class Greeter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'root'}>
        {message.greetText}
        <br />
        Hello {this.props.name}
      </div>
    );
  }
}

export default Greeter;
