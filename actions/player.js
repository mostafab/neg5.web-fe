import PlayerApi from './../api/PlayerApi';

export const SAVE_PLAYER_SUCCESS = 'PLAYER.SAVE_PLAYER_SUCCESS';

export const savePlayer = ({ id, name }) => async dispatch => {
    const updatedPlayer = await PlayerApi.savePlayer({ id, name });
    dispatch({
        type: SAVE_PLAYER_SUCCESS,
        payload: {
            player: updatedPlayer,
        }
    });
}