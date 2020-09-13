import { ReactServerAgent } from 'react-server';

export default {
    getTournamentTeams(tournamentId) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.get(`/neg5-api/tournaments/${tournamentId}/teams`)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    }
}