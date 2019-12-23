var bodyParser = require('body-parser');
const cors = require('cors');

export default function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
}