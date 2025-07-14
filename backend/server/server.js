import express from 'express'
import mongoose from 'mongoose'
import mongodb from 'mongodb'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { postMessages, AIresponse } from '../controllers/userMessageController.js'
const PORT = 3005
const app = express()

dotenv.config({path: '../.env'})

mongoose.connect('mongodb://localhost:27017/neurofile')
app.use(express.json())

app.post('/api/messages', postMessages, AIresponse, (req, res) => {
    res.status(200).json(res.locals.airesponse)
})

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail", 
    auth: {
      user: process.env.EMAIL_USERNAME, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });
  const mail = {
    from: email,
    to: process.env.EMAIL_USERNAME,
    replyTo: email, 
    subject: `New message from ${name} ${email}`,
    text: message,
  };
  try {
    await transporter.sendMail(mail);
    res.status(200).json({ message: "email sent" });
  } catch (error) {
    res.status(500).json({ message: "email failed" });
  }
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express middleware error',
    status: 500,
    message: { err: 'An unexpected error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log('listening on port 3005')
})
