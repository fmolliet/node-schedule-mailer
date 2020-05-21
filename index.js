const cron = require('node-cron');
const express = require('express');
const nodeMailer = require('nodemailer');

app = express();

// Running schedule every minute
cron.schedule('* * * * *', function () {
    console.log('Running Cron Job');
    
    // Configs of nodeMailer for server and Auth
    let transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
        user: 'clifford32@ethereal.email',
        pass: 'pN78HS1nC4N6yN8gRZ'
        }
    });
    // Mail data (Body, address, receipt, subject)
    const mailOptions = {
        from: '"Clifford Mueller" <clifford32@ethereal.email>',
        to: 'clifford32@ethereal.email', 
        subject: 'Hello!', 
        text: 'A Message from Node Cron App',
        html: '<b>A Message from Node Cron App</b>'
    };
    
    // Function to send mail!
    transporter.sendMail(mailOptions, function (error, info) {
        console.log(info.messageId);
        if (error) {
            console.log(error);
        }
    });
    
});

app.get('/', (req, res) => {
    return res.send('This is an return from express')
});

app.listen(3333, ()=> {
    console.log(`listening to the port: 3333`);
});