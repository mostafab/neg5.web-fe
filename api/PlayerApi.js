import { ReactServerAgent } from 'react-server';

export default {
    savePlayer(player) {
        return new Promise((resolve, reject) => {
            return ReactServerAgent.put(`/neg5-api/players/${player.id}`, player)
                .then(res => resolve(res.body))
                .catch(err => reject(err));
        });
    }
}