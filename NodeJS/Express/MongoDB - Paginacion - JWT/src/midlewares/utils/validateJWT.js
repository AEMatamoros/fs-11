const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  //   console.log(token, req.headers.authorization);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(payload);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validateJWT };
