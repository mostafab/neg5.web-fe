import UserApi from './../api/UserApi';

import RLS from './../util/rls';

export default class RequireLoggedInUser {
    handleRoute(next) {
        const user = RLS.get().currentUser;
        if (!user) {
            return this.getRedirect();
        }
        return next();
    }

    getRedirect() {
        return {
            code: 302,
            location: '/'
        }
    }
}