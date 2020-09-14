import { FETCH_TOURNAMENT_TEAMS_SUCCESS } from './../actions/single-tournament';
import { SELECT_TEAM } from './../actions/team';

const reducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOURNAMENT_TEAMS_SUCCESS:
            return {
                ...state,
                teams: action.payload.teams,
            }
        case SELECT_TEAM:
            return {
                ...state,
                selectedTeam: action.payload,
            }
        default:
            return state;
    }
};
  
  export default reducer;
  