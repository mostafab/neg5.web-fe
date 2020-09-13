import { createProxyMiddleware } from 'http-proxy-middleware';

export default (server, reactServerMiddleware) => {

    server.use('/neg5-api', createProxyMiddleware({
        target: 'http://localhost:1337',
    }));

    reactServerMiddleware(); // Must be called once or server will not start
}
