import { connect } from 'react-redux';
import { orderBy, groupBy, keyBy } from 'lodash';

import TournamentMatches from './../components/matches/TournamentMatches';

const normalizeMatches = (matches, teams) => {
    const teamsById = keyBy(teams, 'id');
    const normalizedMatches = matches.map(m => ({
        ...m,
        teams: m.teams.map(team => ({
            ...team,
            name: teamsById[team.teamId].name,
        })),
        round: m.round || 'Unspecified'
    }));

    const matchesByRound = groupBy(normalizedMatches, 'round');
    return Object.keys(matchesByRound)
        .map(round => ({
            round,
            matches: matchesByRound[round],
        }))
}

const mapStateToProps = state => {
    return {
        tournament: state.currentTournament,
        matches: normalizeMatches(state.tournamentMatches.matches, state.tournamentTeams.teams),
        numMatches: state.tournamentMatches.matches.length,
      }
};

export default connect(mapStateToProps, null)(TournamentMatches);