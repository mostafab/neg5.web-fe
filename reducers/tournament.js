import { orderBy } from 'lodash';

import { FETCH_TOURNAMENT_SUCCESS } from './../actions/single-tournament';
import { ADD_PHASE_SUCCESS } from './../actions/phase';
import { ADD_POOL_SUCCESS } from './../actions/pool';

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
        case ADD_POOL_SUCCESS:
            return {
                ...state,
                divisions: [...state.divisions, action.payload.pool],
            }
        default:
            return state;
    }
};
  
  export default reducer;
  