export default function(app){
    app.post('/send-email', (req, res) => {
        console.log(req);
        res.send(200);
    });
}