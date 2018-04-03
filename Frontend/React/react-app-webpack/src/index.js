import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

// import App from './components/App/App';
import Greeter from './components/Greeter/Greeter';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Greeter name={'world'} />, document.getElementById('root'));

registerServiceWorker();
