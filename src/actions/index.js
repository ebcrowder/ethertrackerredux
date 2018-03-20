import axios from 'axios';

export const FETCH_PRICE = 'fetch_price';

const ROOT_URL = 'https://api.coinbase.com/v2/prices/ETH-USD/spot';

export function fetchPrice() {
  const request = axios.get(`${ROOT_URL}`);
  return {
    type: FETCH_PRICE,
    payload: request
  };
}
