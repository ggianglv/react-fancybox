import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './fancybox.css'

ReactDOM.render(<App image="/image.jpg"/>, document.getElementById('root'));
registerServiceWorker();
