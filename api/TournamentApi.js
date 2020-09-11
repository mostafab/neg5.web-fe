import { ReactServerAgent } from 'react-server';

export default {
    getUserTournaments() {
        return new Promise((resolve, reject) => {
            ReactServerAgent.get('/neg5-api/tournaments')
            .then(res => resolve(res.body))
            .catch(err => reject(err)); 
        });
    },
}