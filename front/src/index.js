import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

export const BACK_URL = 'http://localhost:8080';

// Styletron
const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet], { prefix: 'st-' });

ReactDOM.render(
	<StyletronProvider styletron={styletron}><App /></StyletronProvider>,
	document.getElementById('root')
);
registerServiceWorker();
