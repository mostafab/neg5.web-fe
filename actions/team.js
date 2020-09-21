import { isServer } from './../util/serverUtil';
import TeamApi from './../api/TeamApi';

export const SELECT_TEAM = 'TEAM.SELECT_TEAM';
export const ADD_TEAM = 'TEAM.ADD_TEAM';
export const CANCEL_ADD_TEAM = 'TEAM.CANCEL_ADD_TEAM';
export const SUBMITTING_TEAM = 'TEAM.SUBMITTING_TEAM';
export const SUBMIT_TEAM_SUCCESS = 'TEAM.SUBMIT_TEAM_SUCCESS';

export const selectTeam = team => {
    // TODO This is hacky as shit. Do better
    if (!isServer() && team) {
        const newUrl = `/tournaments/${team.tournamentId}/teams/${team.id}`;
        history.replaceState(null, null, newUrl);
    }
    
    return {
        type: SELECT_TEAM,
        payload: team,
    };
};

export const addTeam = () => ({
    type: ADD_TEAM,
});

export const cancelAddTeam = () => ({
    type: CANCEL_ADD_TEAM,
})

export const submitTeam = (team, successCallback) => async (dispatch, getState) => {
    dispatch({
        type: SUBMITTING_TEAM,
    })
    const createdTeam = await TeamApi.addTeam({
        ...team,
        tournamentId: getState().currentTournament.id,
    });
    dispatch({
        type: SUBMIT_TEAM_SUCCESS,
        payload: {
            team: createdTeam,
            addAnother: Boolean(successCallback),
        }
    });
    dispatch(selectTeam(createdTeam));
    if (successCallback) {
        successCallback();
    }
}