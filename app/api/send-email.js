// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Only POST requests are allowed'}); 
//     }

//     const { name, subject, email, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).json({message: 'Name, email and message are required'})
// }
// try {
//     const transporter = nodemailer.createTransport({

//     })
// }
// }