import TournamentApi from "../api/TournamentApi";

export const FETCHED_TOURNAMENTS = 'TOURNAMENT.FETCHED_TOURNAMENTS';
export const START_CREATE_TOURNAMENT = 'TOURNAMENT.START_CREATE_TOURNAMENT';
export const CANCEL_CREATE_TOURNAMENT = 'TOURNAMENT.CANCEL_CREATE_TOURNAMENT';
export const GO_TO_CREATE_STAGE = 'TOURNAMENT.GO_TO_STAGE';
export const SUBMITTING_TOURNAMENT = 'TOURNAMENT.SUBMITTING_TOURNAMENT';
export const SUBMIT_TOURNAMENT_SUCCESS = 'TOURNAMENT.SUBMIT_TOURNAMENT_SUCCESS';
export const SUBMIT_TOURNAMENT_FAILURE = 'TOURNAMENT.SUBMIT_TOURNAMENT_FAILURE';

export const fetchTournaments = () => async (dispatch) => {
    const tournaments = await TournamentApi.getUserTournaments();
    dispatch({
        type: FETCHED_TOURNAMENTS,
        payload: {
            tournaments,
        }
    })
}

export const startCreateTournament = () => ({
    type: START_CREATE_TOURNAMENT,
});

export const cancelCreateTournament = () => ({
    type: CANCEL_CREATE_TOURNAMENT,
});

export const goToStage = stage => ({
    type: GO_TO_CREATE_STAGE,
    payload: {
        stage,
    }
});

export const submitTournamentSuccess = payload => ({
    type: SUBMIT_TOURNAMENT_SUCCESS,
    payload,
});

export const submitTournamentFailure = () => ({
    type: SUBMIT_TOURNAMENT_FAILURE,
});

export const submitTournament = payload => async (dispatch) => {
    dispatch({
        type: SUBMITTING_TOURNAMENT,
    });
    try {
        const tournament = await TournamentApi.createTournament(payload);
        dispatch(submitTournamentSuccess(tournament));
    } catch (e) {
        dispatch(submitTournamentFailure());
    }
};





