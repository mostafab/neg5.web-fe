import PoolApi from './../api/PoolApi';

export const ADD_POOL_SUCCESS = 'POOL.ADD_POOL_SUCCESS';

export const onAddPool = (name, phaseId, successCallback) => async (dispatch, getState) => {
    const tournamentId = getState().currentTournament.id;
    const pool = await PoolApi.addPool({ name, tournamentId, phaseId });
    dispatch({
        type: ADD_POOL_SUCCESS,
        payload: {
            pool,
        },
    });
    successCallback(pool);
};
