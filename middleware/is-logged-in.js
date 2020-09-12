import UserApi from './../api/UserApi';

import RLS from './../util/rls';

export default class RequireLoggedInUser {
    async handleRoute(next) {
        let user;
        try {
            user = await UserApi.getCurrentUser();
            if (!user) {
                return this.getRedirect();
            }
        } catch (e) {
            console.error(e);
            return this.getRedirect();
        }
        RLS.get().currentUser = user;
        return next();
    }

    getRedirect() {
        return {
            code: 302,
            location: '/'
        }
    }
}