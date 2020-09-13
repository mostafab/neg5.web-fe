import { connect } from 'react-redux';
import { orderBy, groupBy, keyBy } from 'lodash';

import TournamentPageSidebar from './../components/tournament/TournamentPageSidebar';

// const normalizeMatches = (matches, teams) => {
//     const teamsById = keyBy(teams, 'id');
//     const normalizedMatches = matches.map(m => ({
//         ...m,
//         teams: m.teams.map(team => ({
//             score: team.score,
//             name: teamsById[team.teamId].name,
//         })),
//         round: m.round || 'Unspecified'
//     }));

//     const matchesByRound = groupBy(normalizedMatches, 'round');
//     return Object.keys(matchesByRound)
//         .map(round => ({
//             round,
//             matches: matchesByRound[round],
//         }))
// }

const mapStateToProps = state => ({
  tournament: state.currentTournament,
//   teams: orderBy(state.tournamentTeams.teams, ['name']),
//   matches: normalizeMatches(state.tournamentMatches.matches, state.tournamentTeams.teams),
//   numMatches: state.tournamentMatches.matches.length,
});

export default connect(mapStateToProps, null)(TournamentPageSidebar);