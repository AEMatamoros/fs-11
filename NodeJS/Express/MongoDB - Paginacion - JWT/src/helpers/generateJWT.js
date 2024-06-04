const jwt = require("jsonwebtoken");
//Header
//Payload
//Signature
const generateJWT = (_id, username, mail) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { _id, username, mail },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        }
        resolve(token);
      }
    );
  });
};

module.exports = { generateJWT };
