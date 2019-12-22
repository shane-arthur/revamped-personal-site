import { join } from 'path';
const DIST_FOLDER = join(process.cwd(), 'dist');

export default function (app) {
    app.set('view engine', 'html');
    app.set('views', join(DIST_FOLDER, 'browser'));
}
