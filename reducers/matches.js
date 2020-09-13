import { FETCH_TOURNAMENT_MATCHES_SUCCESS } from './../actions/single-tournament';

const reducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOURNAMENT_MATCHES_SUCCESS:
            return {
                ...state,
                matches: action.payload,
            }
        default:
            return state;
    }
};
  
  export default reducer;
  