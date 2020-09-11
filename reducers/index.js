import { combineReducers } from 'redux';

import counter from './counter';
import userTournaments from './userTournament';

export const REDUCER_KEYS = {
  userTournaments: 'userTournaments',
}

const rootReducer = combineReducers({
  counter,
  [REDUCER_KEYS.userTournaments]: userTournaments,
});

export default rootReducer;