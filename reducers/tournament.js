import { FETCH_TOURNAMENT_SUCCESS } from './../actions/single-tournament';

const reducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOURNAMENT_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};
  
  export default reducer;
  