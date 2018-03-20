import axios from 'axios';

export const FETCH_PRICE = 'fetch_price';
export const FETCH_HISTORY = 'fetch_history';

const SPOT_URL = 'https://api.coinbase.com/v2/prices/ETH-USD/spot';
const HISTORY_URL =
  'https://poloniex.com/public?command=returnChartData&currencyPair=USDT_ETH&start=1514764800&end=9999999999&period=14400';

export function fetchPrice() {
  const request = axios.get(`${SPOT_URL}`);
  return {
    type: FETCH_PRICE,
    payload: request
  };
}

export function fetchHistory() {
  const request = axios.get(`${HISTORY_URL}`);
  return {
    type: FETCH_HISTORY,
    payload: request
  };
}
