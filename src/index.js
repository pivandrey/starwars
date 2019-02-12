import React from 'react';
import {render} from 'react-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';

import App from './components/App';

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);