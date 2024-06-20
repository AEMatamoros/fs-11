const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/user.controller");
const { validateJWT } = require("../midlewares/utils/validateJWT");
const {
  userSchemaValidation,
} = require("../midlewares/validations/schemaValidators");
const passport = require("passport");
router.post("/login", login);

router.post("/register", userSchemaValidation(), register);

router.post(
  "/refresh",
  () => {
    //Capturar el token anterior que ya expiro
    //Verificar que fue el ultimo token valido
    //Descifrar la data del token
    //ID del usuario
    //Hacen una peticion a la BD obtiene el usuario
    //Generar el token
    //Devolverselo
  },
  (req, res) => {
    res.send("user Data obtained");
  }
);

//Utilizando JWT para verificar el token
router.post("/userData", validateJWT, (req, res) => {
  res.send("user Data obtained");
});

// Utilizando Passport para verificar el token
router.post(
  "/userDataPassport",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //Controller
    res.send("User is  Auth data will be returned");
  }
);

module.exports = router;
