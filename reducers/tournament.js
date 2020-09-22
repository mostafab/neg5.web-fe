import { orderBy } from 'lodash';

import { FETCH_TOURNAMENT_SUCCESS } from './../actions/single-tournament';
import { ADD_PHASE_SUCCESS } from './../actions/phase';

const reducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOURNAMENT_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        case ADD_PHASE_SUCCESS:
            return {
                ...state,
                phases: [...state.phases, action.payload.phase],
            }
        default:
            return state;
    }
};
  
  export default reducer;
  