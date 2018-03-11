import React, { Component } from 'react';
import message from '../json/message.json';
import styles from '../css/Greeter.css';

class Greeter extends Component {
  render() {
    return (
      <div className={styles.root}>
        {message.greetText}
        <br />
        I am really tired!
      </div>
    );
  }
}

export default Greeter;
