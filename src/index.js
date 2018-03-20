import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers';
import PriceInfo from './components/price_info';
import PriceGraph from './components/price_graph';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <PriceInfo />
      <PriceGraph />
    </div>
  </Provider>,
  document.querySelector('#root')
);
