
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as express from 'express';
import { enableProdMode } from '@angular/core';

const PORT = process.env.PORT || 4000;

enableProdMode();
const app = express();

require('./server/routes/server-config').default(app);
require('./server/routes/send-email').default(app);
require('./server/routes/serve-universal').default(app);
require('./server/routes/serve-views').default(app);
require('./server/routes/server-assets').default(app);

app.listen(PORT, () => {
    console.log(`Angular Universal Node Express server listening on ${PORT}`);
});
