import { groupBy } from 'lodash';

export default {
    partitionPoolsByPhase(pools) {
        return groupBy(pools, 'phaseId');
    }
}