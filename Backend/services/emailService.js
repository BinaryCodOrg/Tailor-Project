// services/emailService.js

const nodemailer = require("nodemailer");
2
// 1️⃣ Create transporter once
const transporter = nodemailer.createTransport({
  service: "gmail", // or use host/port if custom SMTP
  auth: {
    user: process.env.SMTP_USER|| "usamasaeed3k@gmail.com" ,
    pass: process.env.SMTP_PASS || "chhx krlt adai tszr" ,
  },
});

// 2️⃣ Send Email Function
const sendEmail = async ({ to, subject, html }) => {
	console.log("test", process.env.SMTP_USER )
  try {
    const info = await transporter.sendMail({
      from: `"tailor" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Email error:", error);
    return false;
  }
};

module.exports = sendEmail;
