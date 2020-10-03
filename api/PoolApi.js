import { ReactServerAgent } from 'react-server';

export default {
    addPool(pool) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.post('/neg5-api/pools', pool)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    }
}