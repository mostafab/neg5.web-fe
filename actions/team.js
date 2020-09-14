import { isServer } from './../util/serverUtil';

export const SELECT_TEAM = 'TEAM.SELECT_TEAM';

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
