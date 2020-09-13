import { FETCHED_TOURNAMENTS } from '../actions/tournament';

const reducer = (state = null, action) => {
  switch (action.type) {
    case FETCHED_TOURNAMENTS:
      return action.payload.tournaments;
    default:
      return state;
  }
};

export default reducer;
