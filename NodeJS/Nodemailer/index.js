const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "alexismatamoros1996101010@gmail.com",
    pass: "zbwhqwshfncipuoo",
  },
});

async function sendMail() {
  try {
    const mailInfo = await transport.sendMail({
      from: "alexismatamoros1996101010@gmail.com",
      to: "alexismatamoros1996777@gmail.com, alexismatamoros1996888@gmail", //Llamado a una db mongo []
      subject: "Fijate que este es un correo de prueba",
      //   text: "Es el texto del correo",
      html: "<h1>Este es el template del correo</h1>",
    });
    console.log(mailInfo);
  } catch (error) {
    console.log(error);
  }
}

sendMail();
