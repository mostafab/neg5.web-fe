import { ReactServerAgent } from 'react-server';

export default {
    getTournamentTeams(tournamentId) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.get(`/neg5-api/tournaments/${tournamentId}/teams`)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    },

    addTeam(teamPayload) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.post('/neg5-api/teams', teamPayload)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    },

    updateTeamPools(teamId, poolIds) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.put(`/neg5-api/teams/${teamId}/pools`, { poolIds })
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    }
}