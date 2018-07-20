// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (root === null) {
  throw new Error('Root element not found.');
}
ReactDOM.render(<App />, root);
registerServiceWorker();
