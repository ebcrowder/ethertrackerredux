import { combineReducers } from 'redux';
import PriceReducer from './reducer_price';
import GraphReducer from './reducer_graph';

const rootReducer = combineReducers({
  price: PriceReducer,
  data: GraphReducer
});

export default rootReducer;
