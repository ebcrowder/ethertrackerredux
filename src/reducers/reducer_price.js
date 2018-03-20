import { FETCH_PRICE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRICE:
      return action.payload.data;
    default:
      return state;
  }
}
