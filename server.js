const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "amos.chan.2022@smu.edu.sg", // Replace with your Brevo account email
        pass: process.env.BREVO_API_KEY,
    },
});

// Email sending endpoint
app.post('/send-email', async (req, res) => {
    const { selectedTime, selectedLunch, selectedActivity } = req.body;

    const mailOptions = {
        from: 'amos.chan.2022@smu.edu.sg', // Replace with your verified sender
        to: 'amoschan2001@yahoo.com.sg',
        subject: 'Your Date Summary',
        html: `
            <h2>Your Date Summary</h2>
            <p><strong>Meeting Time:</strong> ${selectedTime}</p>
            <p><strong>Lunch Choice:</strong> ${selectedLunch}</p>
            <p><strong>Activity Choice:</strong> ${selectedActivity}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
