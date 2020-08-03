
import { ngExpressEngine } from '@nguniversal/express-engine';
import { AppServerModule } from '../../src/app/app.server.module';

export default function(app){
    app.engine('html', ngExpressEngine({
        bootstrap: AppServerModule
    }));
}