const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sendEmail', async (req, res) => {
    let { name, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'garrickchiu0723@gmail.com',
            pass: 'cton cquz gptk gzlr' 
        }
    });

    let mailOptions = {
        from: email,
        to: 'garrickchiu0723@gmail.com',
        subject: subject,
        text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).send('Server error');
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${5000}`);
});
