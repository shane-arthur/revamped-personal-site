
import { ngExpressEngine } from '@nguniversal/express-engine';
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/server/main');

export default function(app){
    app.engine('html', ngExpressEngine({
        bootstrap: AppServerModuleNgFactory
    }));
}