import { ReactServerAgent } from 'react-server';

export default {
    getTournamentMatches(tournamentId) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.get(`/neg5-api/tournaments/${tournamentId}/matches`)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    }
}