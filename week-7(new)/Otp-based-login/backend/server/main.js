// app.js

const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Twilio credentials (replace with your own credentials)
const accountSid = 'AC96a732a9eafe549f0ab0eef134160ab0';
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = '9758584612';
// Generate a random  6 digit otp
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // added 100000 as we want the six digit number
};
//  Now let's store the generated otp in memory 
const otpStorage = {};

// Endpoint to send otp ;
app.post('/api/send-otp', async(req,res) => {
    const { phoneNumber } = req.body;
    try {
        // generate otp
         const otp = generateOTP();

        //  send otp via twillo sms
        await twilioClient.messages.create({
            body:`Your otp is ${otp}`,
            from:9758584612,
            to:phoneNumber,

        })
        // Store OTP in memory
    otpStorage[phoneNumber] = otp;

    res.status(200).json({ success: true, message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Error sending OTP.' });
  }
    }
);


app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
