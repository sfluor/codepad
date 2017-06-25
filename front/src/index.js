import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Styletron
const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet], { prefix: 'st-' });

ReactDOM.render(
	<StyletronProvider styletron={styletron}><App /></StyletronProvider>,
	document.getElementById('root')
);
registerServiceWorker();
