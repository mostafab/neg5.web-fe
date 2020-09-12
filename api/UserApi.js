import { ReactServerAgent } from 'react-server';

export default {
    getCurrentUser() {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.get('/neg5-api/accounts/me')
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        })
    }
}