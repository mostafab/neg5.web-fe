import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import React from 'react';
import serialize from 'serialize-javascript';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export default class BaseNeg5Page {

    getTitle() {
        return 'Neg 5'
    }

    getPageElements() {}

    async createStore(_request) {}

    async renderPageHtml(request) {
        const store  = await this.createStore(request);
        const markup = renderToString(
            <Provider store={store}>
                { this.getPageElements() }
            </Provider>
        );
        const finalState = store.getState();
        return `<!doctype html>
        <html lang="">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet='utf-8' />
                <title>${this.getTitle()}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                ${assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''}
                ${process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`}
            </head>
            <body>
                <div id="root">${markup}</div>
                <script>
                window.__PRELOADED_STATE__ = ${serialize(finalState)}
                </script>
            </body>
        </html>`
    }
}
