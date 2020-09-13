import UserApi from './../api/UserApi';

import RLS from './../util/rls';

export default class SetLoggedInUser {
    async handleRoute(next) {
        try {
            const user = await UserApi.getCurrentUser();
            RLS.get().currentUser = user || null;
        } catch (e) {
            console.error(e);
            RLS.get().currentUser = null;
        }
        
        return next();
    }
}