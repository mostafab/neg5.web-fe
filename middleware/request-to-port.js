import { ReactServerAgent } from 'react-server';

import { isServer } from '../util/serverUtil';

export default class RequestToPortMiddleware {
	handleRoute(next) {
		if (isServer()) {
            const token = this.getRequest().getCookies()['nfToken'];
			ReactServerAgent.plugRequest(req => {
                const env = process.env.NODE_ENV;
                if (env == 'production') {
                    req.urlPrefix(`localhost:${process.env.PORT}`);
                } else {
                    req.urlPrefix('localhost:3000');
                }
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