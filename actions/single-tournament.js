import TournamentApi from './../api/TournamentApi';
import TeamApi from './../api/TeamApi';
import MatchApi from '../api/MatchApi';

export const FETCH_TOURNAMENT_SUCCESS = 'TOURNAMENT.FETCH_SUCCESS';
export const FETCH_TOURNAMENT_TEAMS_SUCCESS = 'TOURNAMENT.FETCH_TEAMS_SUCCESS';
export const FETCH_TOURNAMENT_MATCHES_SUCCESS = 'TOURNAMENT.FETCH_MATCHES_SUCCESS';

export const fetchTournamentSuccess = payload => ({
    type: FETCH_TOURNAMENT_SUCCESS,
    payload
});

export const fetchTournamentTeamsSuccess = payload => ({
    type: FETCH_TOURNAMENT_TEAMS_SUCCESS,
    payload,
})

export const fetchTournamentMatchesSuccess = payload => ({
    type: FETCH_TOURNAMENT_MATCHES_SUCCESS,
    payload,
})

export const fetchTournament = tournamentId => async dispatch => {
    const tournament = await TournamentApi.getTournament(tournamentId);
    dispatch(fetchTournamentSuccess(tournament));
};

export const fetchTournamentTeams = tournamentId => async dispatch => {
    const teams = await TeamApi.getTournamentTeams(tournamentId);
    dispatch(fetchTournamentTeamsSuccess(teams));
}

export const fetchTournamentMatches = tournamentId => async dispatch => {
    const matches = await MatchApi.getTournamentMatches(tournamentId);
    dispatch(fetchTournamentMatchesSuccess(matches));
}
