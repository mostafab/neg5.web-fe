import { ReactServerAgent } from 'react-server';

export default {
    addPhase(phase) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.post('/neg5-api/phases', phase)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    }
}