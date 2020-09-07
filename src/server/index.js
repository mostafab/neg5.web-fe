import express from 'express';
import httpProxy from 'express-http-proxy';
import bodyParser from 'body-parser';

import 'antd/dist/antd.css';

const server = express();

server
  .disable('x-powered-by')
  .use(bodyParser.json())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use('/neg5-api', httpProxy('http://localhost:1337', {
    proxyReqPathResolver: req => `/neg5-api/${req.url}`,
  }));

registerRoutes(server);

function registerRoutes(expressServer) {
  const entries = require('./routes.json').routes;
  entries.forEach(({
    name,
    routes,
    page
  }) => {
    const Page = require('./../common/pages/' + name).default;
    const pageObj = new Page();
    (routes || []).forEach(r => {
      expressServer.get(r, async (req, res) => {
        try {
          const html = await pageObj.renderPageHtml(req);
          res.send(html);
        } catch (e) {
          console.error(e);
          res.status(500).send('INTERNAL SERVER ERROR');
        }
      })
      console.log(`Mapped route ${r} to page ${page}`);
    });
  });
}

export default server;
