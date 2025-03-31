const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
   host: "smtp.office365.com",
   port: 587,
   auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
   },
});

const message = `<h1>Ash's <span style="color:yellow;background-color:black">Pikachu</span></h1>
<img style='width:50%'
   src="https://archives.bulbagarden.net/media/upload/4/49/Ash_Pikachu.png"
   alt="Ash's Pikachu" />

`;

const mailOptions = {
   from: `Peter Zhou <${process.env.USER_EMAIL}>`,
   to: process.env.DESTINATION_EMAIL,
   subject: "Pikachu",
   text: "plain text message not shown if there is html key",
   html: message,
};

transporter.sendMail(mailOptions, function (error, info) {
   if (error) {
      console.log("Error", error);
   } else {
      console.log("Email sent: " + info.response);
   }
});
