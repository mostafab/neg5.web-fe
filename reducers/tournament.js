import { orderBy } from 'lodash';

import { FETCH_TOURNAMENT_SUCCESS } from './../actions/single-tournament';

const reducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_TOURNAMENT_SUCCESS:
            return {
                ...state,
                ...action.payload,
                phases: orderBy(action.payload.phases || [], ['name']),
            }
        default:
            return state;
    }
};
  
  export default reducer;
  