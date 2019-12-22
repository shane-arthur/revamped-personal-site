
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/server/main');

export default function(app){
    app.engine('html', ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [provideModuleMap(LAZY_MODULE_MAP)]
    }));
}