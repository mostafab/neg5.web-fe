import PhaseApi from './../api/PhaseApi';

export const ADD_PHASE_SUCCESS = 'PHASE.ADD_PHASE_SUCCESS';

export const onAddPhase = (name, successCallback) => async (dispatch, getState) => {
    const tournamentId = getState().currentTournament.id;
    const phase = await PhaseApi.addPhase({ name, tournamentId});
    dispatch({
        type: ADD_PHASE_SUCCESS,
        payload: {
            phase,
        },
    });
    successCallback(phase);
};
