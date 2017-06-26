import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

// Styletron
const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet], { prefix: 'st-' });

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<StyletronProvider styletron={styletron}><App /></StyletronProvider>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
