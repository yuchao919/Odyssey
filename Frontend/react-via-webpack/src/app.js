import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import './assets/css/main.css';

import Greeter from './components/Greeter/Greeter.jsx';

// console.log(_.join(['aaa', 'bbb', 'ccc'], ' '));

render(<Greeter name="Night" />, document.getElementById('root'));
