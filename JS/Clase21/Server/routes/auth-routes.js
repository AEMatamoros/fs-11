const { Router } = require("express");
const { check, oneOf } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controller/auth");

router.post(
  "/register",
  [
    check("name", "El nombre es un campo obligatorio").not().isEmpty(),
    check("email", "El formato del correo es incorrecto").isEmail(),
    check(
      "password",
      "La contraseña es obligatoria, debe poseer al menos 8 caracteres"
    )
      .not()
      .isEmpty()
      .isLength((min = 8)),
    validarCampos,
  ],
  crearUsuario,
  (req, res) => {}
);

router.post(
  "/login",
  [
    check("email", "El formato del correo es incorrecto").isEmail(),
    check("password", "La contraseña debe tener al menos 8 caracteres")
      .not()
      .isEmpty()
      .isLength((min = 8)),
    validarCampos,
  ],
  loginUsuario,
  (req, res) => {}
);

router.get("/renew", validarJWT, revalidarToken, (req, res) => {});

module.exports = router;
