export const SELECT_TEAM = 'TEAM.SELECT_TEAM';

export const selectTeam = team => ({
    type: SELECT_TEAM,
    payload: team,
});
