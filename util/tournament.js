import { groupBy } from 'lodash';

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
    UNASSIGNED_POOL_KEY,
}