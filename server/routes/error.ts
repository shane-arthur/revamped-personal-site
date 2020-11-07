const sgMail = require('@sendgrid/mail');
import { API_KEY } from '../secrets/sendgrid';

sgMail.setApiKey(API_KEY);

export default function(app){
    app.get('/error', (req, res) => {
       res.status(404).send('Not Found');
    });
}