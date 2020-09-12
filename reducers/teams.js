import { FETCH_TOURNAMENT_TEAMS_SUCCESS } from './../actions/single-tournament';

const reducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOURNAMENT_TEAMS_SUCCESS:
            return {
                ...state,
                teams: action.payload,
            }
        default:
            return state;
    }
};
  
  export default reducer;
  