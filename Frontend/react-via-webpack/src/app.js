import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import Greeter from './modules/Greeter';

import './css/main.css';
import styles from './css/Greeter.css';

console.log(_.join(['aaa', 'bbb', 'ccc'], ' '));

render(<Greeter name="Night" />, document.getElementById('root'));
