// app.js

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const twilio = require('twilio');

const app = express();
const port = 5000;

app.use(bodyParser.json());



// Twilio credentials (replace with your own credentials)
const accountSid = 'AC96a732a9eafe549f0ab0eef134160ab0';
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.PHN_NUMBER;
console.log(process.env.TWILIO_AUTH_TOKEN);
// Generate a random  6 digit otp
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // added 100000 as we want the six digit number
};
//  Now let's store the generated otp in memory 
const otpStorage = {};

// Endpoint to send otp ;

app.post('/api/send-otp', async(req,res) => {
    const { phoneNumber } = req.body; // const phoneNumber = req.body.phoneNumber;
    try {
        // generate otp
         const otp = generateOTP();

        //  send otp via twillo { '+1234567890': '987654' } sms
        await twilioClient.messages.create({
            body:`Your otp is ${otp}`,
            from:twilioPhoneNumber,
            to:phoneNumber,

        })
        // Store OTP in memory
        // Dynamically storing value with phn number associated  eg { '+1234567890': '987654' }
    otpStorage[phoneNumber] = otp;

    res.status(200).json({ success: true, message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, message: 'Error sending OTP.' });
  }
    }
);

// Endpoint to verify the OTP

app.post('/api/verify-otp',(req,res) => {
    const {phoneNumber,otp}=req.body;
    //  retrieved stored otp
    const storeOtp = otpStorage[phoneNumber];
    if(storeOtp && storeOtp === otp) {
        res.status(200).json({success:true,message:"Otp verification successful"})
    } else{
        res.status(400).json({success:false, message:'Invalid OTP'})
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
