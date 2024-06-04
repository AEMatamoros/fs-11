const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/user.controller");
const { validateJWT } = require("../midlewares/utils/validateJWT");
const passport = require("passport");
router.post("/login", login);

router.post("/register", register);

//Utilizando JWT para verificar el token
router.post("/userData", validateJWT, (req, res) => {
  res.send("user Data obtained");
});

// Utilizando Passport para verificar el token
router.post(
  "/userDataPassport",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send("user Data obtained");
  }
);

module.exports = router;
