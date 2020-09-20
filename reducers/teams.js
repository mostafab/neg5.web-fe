import { FETCH_TOURNAMENT_TEAMS_SUCCESS } from './../actions/single-tournament';
import {
    SELECT_TEAM,
    ADD_TEAM,
    CANCEL_ADD_TEAM,
    SUBMITTING_TEAM,
    SUBMIT_TEAM_SUCCESS,
} from './../actions/team';

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
        case ADD_TEAM:
            return {
                ...state,
                addingTeam: true,
            }
        case CANCEL_ADD_TEAM:
            return {
                ...state,
                addingTeam: false,
            }
        case SUBMITTING_TEAM:
            return {
                ...state,
                savingNewTeam: true, 
            }
        case SUBMIT_TEAM_SUCCESS:
            return {
                ...state,
                savingNewTeam: false,
                addingTeam: action.payload.addAnother || false,
                teams: [...state.teams, action.payload.team],
                selectedTeam: action.payload.team,
            }
        default:
            return state;
    }
};
  
  export default reducer;
  