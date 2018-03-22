import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import './index.css';

import reducers from './reducers';
import PriceInfo from './components/price_info';
import PriceGraph from './components/price_graph';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <div className="container bg-dark">
        <PriceInfo />
        <PriceGraph />
      </div>
      <h6 className="text-center text-secondary">
        ETH spot price provided by{' '}
        <a href="https://www.coinbase.com/">Coinbase.</a>
      </h6>
      <h6 className="text-center text-secondary">
        ETH chart data provided by <a href="https://poloniex.com/">Poloniex.</a>
      </h6>
    </div>
  </Provider>,
  document.querySelector('#root')
);
