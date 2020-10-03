import { connect } from 'react-redux';
import { groupBy, keyBy, orderBy } from 'lodash';

import TournamentMatches from './../components/matches/TournamentMatches';

const normalizeMatches = (matches, teams, tossupValues) => {
    const teamsById = keyBy(teams, 'id');
    const answerTypesByValue = keyBy(tossupValues, 'value');
    const normalizedMatches = matches.map(m => ({
        ...m,
        teams: m.teams.map(team => ({
            ...team,
            name: teamsById[team.teamId].name,
            tossupTotals: (() => {
                const totals = {};
                (team.players || []).forEach(p => {
                    const answers = p.answers || [];
                    answers.forEach(a => {
                        if (!totals[a.tossupValue]) {
                            totals[a.tossupValue] = 0;
                        }
                        totals[a.tossupValue] += (a.numberGotten || 0);
                    })
                })
                const result = Object.keys(totals).map(t => ({
                    value: t,
                    number: totals[t],
                    type: answerTypesByValue[t].answerType,
                }));
                return orderBy(result, ['value']);
            })(),
        })),
        round: m.round || 'Unspecified',
        formattedCreatedAt: new Date(m.addedAt).toLocaleString('en-US'),
    }));

    const matchesByRound = groupBy(
        orderBy(normalizedMatches, ['addedAt'], ['desc']),
        'round'
    );
    const result = Object.keys(matchesByRound)
        .map(round => ({
            round,
            matches: matchesByRound[round],
        }));
    return orderBy(result, ['round'], ['desc']);
}

const mapStateToProps = state => {
    return {
        tournament: state.currentTournament,
        matches: normalizeMatches(state.tournamentMatches.matches, state.tournamentTeams.teams, state.currentTournament.tossupValues),
        numMatches: state.tournamentMatches.matches.length,
      }
};

export default connect(mapStateToProps, null)(TournamentMatches);