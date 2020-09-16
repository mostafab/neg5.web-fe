import { ReactServerAgent } from 'react-server';

import { isServer } from '../util/serverUtil';

export default class RequestToPortMiddleware {
	handleRoute(next) {
		if (isServer()) {
            const token = this.getRequest().getCookies()['nfToken'];
			ReactServerAgent.plugRequest(req => {
                req.urlPrefix(`localhost:${process.env.PORT}`);
                if (token) {
                    req.set({
                        Cookie: `nfToken=${token}`,
                    });
                }
			});
		}
		return next();
	}
}