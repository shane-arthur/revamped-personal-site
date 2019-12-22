const sgMail = require('@sendgrid/mail');
import { API_KEY } from '../secrets/sendgrid';

sgMail.setApiKey(API_KEY);

export default function(app){
    app.post('/send-email', (req, res) => {
        sgMail.send(req.body).then(() => {
            res.json({ message: 'sucess' });
        }).catch(error => {
            console.log(error);
            res.sendStatus(400);
        });
    });
}