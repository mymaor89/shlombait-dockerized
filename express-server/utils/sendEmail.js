const nodemailer = require("nodemailer");

var smtpConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shlombayit123@gmail.com",
    pass: "!Q@W3e4r%T^Y",
  },
};
var transporter = nodemailer.createTransport(smtpConfig);
const sendEmail = (options) => {
  const transporter = nodemailer.createTransport(smtpConfig);

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
