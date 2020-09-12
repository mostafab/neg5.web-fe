import { ReactServerAgent } from 'react-server';

export default {
    getUserTournaments() {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.get('/neg5-api/tournaments')
            .then(res => resolve(res.body))
            .catch(err => reject(err)); 
        });
    },

    createTournament(payload) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.post('/neg5-api/tournaments', payload)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        })
    }
}