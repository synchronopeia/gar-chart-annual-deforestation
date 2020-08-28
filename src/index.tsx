import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

declare const CONFIG: {[key: string]: string}; /** CONFIG constant is included in Webpack */

const { API_BASE_URI } = CONFIG;

ReactDOM.render(
  <App apiBaseUri={API_BASE_URI} />,
  document.getElementById('app'),
);
