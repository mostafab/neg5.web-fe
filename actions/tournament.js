import TournamentApi from "../api/TournamentApi";

export const FETCHED_TOURNAMENTS = 'Tournament.fetchedTournaments';

export const fetchTournaments = () => async (dispatch) => {
    const tournaments = await TournamentApi.getUserTournaments();
    dispatch({
        type: FETCHED_TOURNAMENTS,
        payload: {
            tournaments,
        }
    })
}


