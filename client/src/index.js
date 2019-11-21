import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from './context';

// import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import './index.css';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
