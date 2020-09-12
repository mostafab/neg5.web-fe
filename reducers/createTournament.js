import {
    START_CREATE_TOURNAMENT,
    GO_TO_CREATE_STAGE,
    CANCEL_CREATE_TOURNAMENT,
    SUBMITTING_TOURNAMENT,
    SUBMIT_TOURNAMENT_SUCCESS,
    SUBMIT_TOURNAMENT_FAILURE
} from '../actions/tournament';

import { TOURNAMENT_FORM_STAGES } from './../util/constant';

const initialState = {
    stage: null,
    submitting: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_CREATE_TOURNAMENT:
      return {
        ...state,
        stage: TOURNAMENT_FORM_STAGES.BASIC_INFO,
      }
    case GO_TO_CREATE_STAGE:
        return {
            ...state,
            stage: action.payload.stage,
        }
    case CANCEL_CREATE_TOURNAMENT:
        return {
            ...state,
            stage: null,
        }
    case SUBMITTING_TOURNAMENT:
        return {
            ...state,
            submitting: true,
        }
    case SUBMIT_TOURNAMENT_SUCCESS:
        return {
            ...state,
            submitting: false,
            stage: null,
        }
    case SUBMIT_TOURNAMENT_FAILURE:
        return {
            ...state,
            submitting: false,
        }
    default:
      return state;
  }
};

export default reducer;
