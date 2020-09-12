import { combineReducers } from 'redux';

import userTournaments from './userTournament';
import user from './user';
import createTournament from './createTournament';

export const REDUCER_KEYS = {
  userTournaments: 'userTournaments',
  currentUser: 'currentUser',
  createTournamentData: 'createTournamentData',
}

const rootReducer = combineReducers({
  [REDUCER_KEYS.userTournaments]: userTournaments,
  [REDUCER_KEYS.currentUser]: user,
  [REDUCER_KEYS.createTournamentData]: createTournament,
});

export default rootReducer;