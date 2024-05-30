const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/user.controller");
router.post("/login", login);

router.post("/register", register);

router.post("/userData", (req, res) => {
  res.send("user Data obtained");
});

module.exports = router;
