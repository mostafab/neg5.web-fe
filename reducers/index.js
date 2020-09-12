import { combineReducers } from 'redux';

import userTournaments from './userTournament';
import user from './user';
import createTournament from './createTournament';
import currentTournament from './tournament';
import tournamentTeams from './teams';

export const REDUCER_KEYS = {
  userTournaments: 'userTournaments',
  currentUser: 'currentUser',
  createTournamentData: 'createTournamentData',
  currentTournament: 'currentTournament',
  tournamentTeams: 'tournamentTeams',
}

const rootReducer = combineReducers({
  [REDUCER_KEYS.userTournaments]: userTournaments,
  [REDUCER_KEYS.currentUser]: user,
  [REDUCER_KEYS.createTournamentData]: createTournament,
  [REDUCER_KEYS.currentTournament]: currentTournament,
  [REDUCER_KEYS.tournamentTeams]: tournamentTeams,
});

export default rootReducer;