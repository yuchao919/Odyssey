import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

// import App from './components/App/App';
import Greeter from './components/Greeter';
import GreeterStyles from './Greeter.scss';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Greeter name={'world'} styles={GreeterStyles} />, document.getElementById('root'));

registerServiceWorker();
