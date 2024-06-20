const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");

let opts = {};
opts.jwtFromRequest = headerExtractor;
opts.secretOrKey = process.env.JWT_SECRET;

function headerExtractor(req) {
  let token = null;
  token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : "";
  return token;
}

module.exports = () => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      return done(null, { _id: 1, user: { ...jwt_payload } });
    })
  );
};
