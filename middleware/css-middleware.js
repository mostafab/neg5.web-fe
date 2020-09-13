import 'antd/dist/antd.css';

export default class CSSMiddleware {
	handleRoute(next) {
		return next();
	}
}