
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as express from 'express';
import { enableProdMode } from '@angular/core';
import { join } from 'path';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

enableProdMode();

const app = express();

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
}));


app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

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


app.listen(PORT, () => {
    console.log(`Angular Universal Node Express server listening on ${PORT}`);
});
