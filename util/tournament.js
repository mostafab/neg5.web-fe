import { groupBy, keyBy, orderBy } from 'lodash';

const UNASSIGNED_POOL_KEY = 'Unassigned';

export default {
    partitionPoolsByPhase(pools) {
        return groupBy(pools, 'phaseId');
    },
    groupTeamsByPools(phaseId, pools, teams) {
        const groupingByPools = {};
        teams.forEach(team => {
            const relevantTeamPool = (team.divisions || []).find(div => div.phaseId === phaseId);
            const poolId = relevantTeamPool ? relevantTeamPool.id : UNASSIGNED_POOL_KEY;
            if (!groupingByPools[poolId]) {
                groupingByPools[poolId] = [];
            }
            groupingByPools[poolId].push(team);
        });
        pools.forEach(p => {
            if (!groupingByPools[p.id]) {
                groupingByPools[p.id] = [];
            }
        })
        return groupingByPools;
    },
    normalizeAndGroupMatchesByRound(matches, teams, tossupValues) {
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
    },
    UNASSIGNED_POOL_KEY,
}