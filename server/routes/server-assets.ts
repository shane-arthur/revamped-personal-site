import { join } from 'path';
const DIST_FOLDER = join(process.cwd(), 'dist');
import * as express from 'express';

export default function (app) {
    app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
        maxAge: '1y'
    }));

    app.get('*', (req, res) => {
        res.render('index', { req });
    });

    app.all('*', (req, res) => {
        console.log('not found --> ', req.path);
        if (req.url.includes('node-assets/') ||
            /main-es5.(.*).js(.*)/g.test(req.url) ||
            /main-es2015.(.*).js(.*)/g.test(req.url) ||
            /common.(.*).js(.*)/g.test(req.url) ||
            /polyfills-es2015.(.*).js(.*)/g.test(req.url) ||
            /polyfills-es5.(.*).js(.*)/g.test(req.url) ||
            /runtime-es2015.(.*).js(.*)/g.test(req.url) ||
            /runtime-es5.(.*).js(.*)/g.test(req.url) ||
            /styles.(.*).css(.*)/g.test(req.url) ||
            /([0-9]{2}\.)(.*).js(.*)/g.test(req.url) ||
            /([0-9]{1}\.)(.*).js(.*)/g.test(req.url) ||
            /scripts.(.*).js(.*)/g.test(req.url)
        ) { // Avoid looping between apache and node
            res.status(404).send('Not found');
        } else {
            res.redirect(req.url);
        }
    });
}