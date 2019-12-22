
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as express from 'express';
import { enableProdMode } from '@angular/core';
<<<<<<< HEAD
=======
import { join } from 'path';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

>>>>>>> master
const PORT = process.env.PORT || 4000;

enableProdMode();
const app = express();

require('./server/routes/serve-universal').default(app);
require('./server/routes/serve-views').default(app);
require('./server/routes/server-assets').default(app);

app.listen(PORT, () => {
    console.log(`Angular Universal Node Express server listening on ${PORT}`);
});
